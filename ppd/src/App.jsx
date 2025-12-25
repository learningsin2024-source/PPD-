import { useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./component/navbar";
import Sidebar from "./component/sidebar";
import Statscard from "./component/statscard";
import Progressbar from "./component/progressbar";
import ProfileHeader from "./component/profieheader";
import AddTaskForm from "./component/AddTaskForm.jsx";
import Avatar from "./assets/Avatar.jpg";
import { UserContext } from "./context/UserContext.jsx";
import TaskList from "./component/TaskList.jsx";
import HabitList from "./component/HabitList.jsx";
import AddHabitForm from "./component/AddHabitForm.jsx";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "work on my react js skill", completed: true },
    { id: 2, title: "learn typescript", completed: false },
  ]);

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };


  //Habits
const today = new Date().toISOString().slice(0, 10);

const [habits, setHabits] = useState([
  {
    id: Date.now(),
    title: "Working out",
    history: [today],
  },
  {
    id: Date.now() + 1,
    title: "Reading",
    history: [today],
  },
  {
    id: Date.now() + 2,
    title: "Meditation",
    history: [],
  }
]);

const addHabit = (title) => {

  const newHabit =  {
    id: Date.now(),
    title, 
    history: [today],
  }

  setHabits([...habits, newHabit])
}


const totalHabits = habits.length
const habitDoneToday = habits.filter((h) => h.history.includes(today)).length
const activeStreakCount = habits.filter((h) => h.history.includes(today)).length 
const habitCompletion = (habitDoneToday / totalHabits) * 100;









// streak 
const DAY_MS = 24 * 60 * 60 * 1000;
const toDate = (d) => new Date(d);
const addDays = (date, days) =>
  new Date(date.getTime() + days * DAY_MS)
    .toISOString()
    .slice(0, 10);

const getCurrentStreak = (history, today) => {
  if (!history.includes(today)) return 0;

  let streak = 1;
  let currentDate = today;

  while (true) {
    const prevDate = addDays(new Date(currentDate), -1);
    if (history.includes(prevDate)) {
      streak++;
      currentDate = prevDate;
    } else {
      break;
    }
  }

  return streak;
};

//Active Habit count


const getActiveHabitsCount = (habits, today) =>
  habits.filter((h) => h.history.includes(today)).length;

  // Task stats
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;
  const completionPercentage =
    totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
    const taskCompletion = (completedTasks / totalTasks) * 100;

  // Sidebar and Navbar links
  const sidelinks = [
    { key: 1, name: "Dashboard", icon: "🏠", route: "/" },
    { key: 2, name: "Tasks", icon: "✅", route: "/tasks" },
    { key: 3, name: "Notes", icon: "📝", route: "/notes" },
    { key: 4, name: "Timer", icon: "⏱", route: "/timer" },
    { key: 5, name: "Settings", icon: "⚙️", route: "/settings" },
  ];

  const links = [
    { name: "Dashboard", route: "/", key: 1 },
    { name: "Tasks", route: "/tasks", key: 2 },
    { name: "Notes", route: "/notes", key: 3 },
    { name: "Timer", route: "/timer", key: 4 },
  ];

  const { setUser } = useContext(UserContext);
  useEffect(() => {
    setUser({
      username: "Tyzon",
      email: "johntyzon95@gmail.com",
      createdAt: "July",
      avatar: Avatar,
    });
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Navbar links={links} isOpenMobile={false} setIsOpenMobile={() => {}} />

      <div className="flex flex-1">
        <Sidebar sidelinks={sidelinks} isOpenMobile={false} setIsOpenMobile={() => {}} />

        <main className="flex-1 p-6 overflow-auto bg-slate-100 min-h-screen relative">
          {/* Header */}
          <ProfileHeader photo={Avatar} username="Abisoye" statuss="Active ✅" />
         <div className="space-x-2.5">
          {/* Add Task Form */}
          <AddTaskForm addTask={addTask} />

          {/* Add Habit Form */}
          <AddHabitForm addHabit={addHabit} />
          </div>
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
            <Statscard icon="📝" title="Tasks Created" trend={totalTasks} />
            <Statscard icon="✅" title="Tasks Completed" trend={completedTasks} />
            <Statscard icon="⏳" title="Tasks Pending" trend={pendingTasks} />
            <Statscard
              icon="📊"
              title="Completion %"
              trend={`${completionPercentage.toFixed(0)}%`}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
  <Statscard icon="📋" title="Total Habits" trend={totalHabits} />
  <Statscard icon="✅" title="Done Today" trend={habitDoneToday} />
  <Statscard icon="🔥" title="Active Streaks" trend={activeStreakCount} />
  <Statscard
    icon="📈"
    title="Completion %"
    trend={`${((habitDoneToday / totalHabits) * 100).toFixed(0)}%`}
  />
</div>

      <div className="space-y-4">
  <Progressbar
    value={(completedTasks / totalTasks) * 100}
    color="bg-green-500"
    label="Tasks Completed"
    showpercent={true}
  />
  <Progressbar
    value={(habitDoneToday / totalHabits) * 100}
    color="bg-blue-500"
    label="Habits Done Today"
    showpercent={true}
  />
</div> <br/>


          
                         <HabitList habits={habits} setHabits={setHabits} today={today}/><br/>
                         <TaskList tasks={tasks} setTasks={setTasks} />
       

         
        </main>
      </div>
    </div>
  );
}

export default App;
