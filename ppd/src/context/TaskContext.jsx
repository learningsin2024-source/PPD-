import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

const TASKS_KEY = "ppd_tasks";

const MOCK_TASKS = [
  { id: 1, title: "work on my react js skill", completed: true },
  { id: 2, title: "learn typescript", completed: false },
];

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
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;
  const completionPercentage =
    totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  useEffect(() => {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        addTask,
        totalTasks,
        completedTasks,
        pendingTasks,
        completionPercentage,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
