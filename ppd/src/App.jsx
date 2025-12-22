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

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "work on my react js skill", completed: true },
    { id: 2, title: "learn typescript", completed: false },
  ]);

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  // Task stats
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;
  const completionPercentage =
    totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

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

          {/* Add Task Form */}
          <AddTaskForm addTask={addTask} />

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
                         <TaskList tasks={tasks} setTasks={setTasks} />
          <Progressbar
            value={30}
            color="bg-slate-950"
            label="Storage Usage"
            showpercent={true}
          />

         
        </main>
      </div>
    </div>
  );
}

export default App;
