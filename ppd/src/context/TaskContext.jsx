import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

const TASKS_KEY = "ppd_tasks";

const MOCK_TASKS = [
  { id: 1, title: "work on my react js skill", completed: true, completedAt:  new Date().toISOString() },
  { id: 2, title: "learn typescript", completed: false, completedAt:  new Date().toISOString()  },
];

function normalizeDate(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function isToday(date) {
  const taskDate = normalizeDate(date);
  const today = normalizeDate(new Date());

  return taskDate.getTime() === today.getTime();
}

function isYesterday(date) {
  const taskDate = normalizeDate(date);

  const yesterday = normalizeDate(new Date());
  yesterday.setDate(yesterday.getDate() - 1);

  return taskDate.getTime() === yesterday.getTime();
}


function loadTasks() {
  try {
    const raw = localStorage.getItem(TASKS_KEY);
    if (!raw) return MOCK_TASKS;

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return MOCK_TASKS;

    return parsed;
  } catch (error) {
    console.error("Failed to load tasks:", error);
    return MOCK_TASKS;
  }
}

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => loadTasks());

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks((prev) => [...prev, newTask]);
  };

  // Task stats
  let trend = "same";

let message = "You completed the same number of tasks as yesterday";


  const totalTasks = tasks.length;
  const completedTasks = tasks.filter( (task) => task.completed && task.completedAt );

  const todayCompletedCount = completedTasks.filter((task) =>
  isToday(task.completedAt)
).length;

const yesterdayCompletedCount = completedTasks.filter((task) =>
  isYesterday(task.completedAt)
).length;

const difference = todayCompletedCount - yesterdayCompletedCount;

const pendingTasks = totalTasks - completedTasks;
const completionPercentage =  totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
const todayVsYesterdayInsight = { difference, trend, message,};
 
if (difference > 0) trend = "up";
if (difference < 0) trend = "down";



if (trend === "up") {
  message = `You completed ${difference} more task(s) today`;
}

if (trend === "down") {
  message = "You completed fewer tasks than yesterday";
}



  useEffect(() => {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{
  tasks,
  addTask,
  totalTasks,
  completedTasks,
  pendingTasks,
  completionPercentage,
  todayCompletedCount,
  yesterdayCompletedCount,
  todayVsYesterdayInsight,
}}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
