import { useState, useEffect, useContext } from "react";

import Navbar from "../component/navbar";
import Sidebar from "../component/sidebar";
import Statscard from "../component/statscard";
import Progressbar from "../component/progressbar";
import ProfileHeader from "../component/profieheader";
import AddTaskForm from "../component/AddTaskForm.jsx";

import TaskList from "../component/TaskList.jsx";
import HabitList from "../component/HabitList.jsx";
import AddHabitForm from "../component/AddHabitForm.jsx";
import { TaskContext } from "../context/TaskContext.jsx";
import { HabitContext } from "../context/HabitContext.jsx";



function Dashboard(){

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

  
     
const {tasks, setTasks, addTask, totalTasks, completedTasks, pendingTasks,completionPercentage, } = useContext(TaskContext);
const {habits, setHabits, today, totalHabits, activeStreakCount, addHabit, habitDoneToday} = useContext(HabitContext);



 
   

    return (
        <>
        <div className="flex flex-col h-screen">
      <Navbar links={links} isOpenMobile={false} setIsOpenMobile={() => {}} />

      <div className="flex flex-1">
        <Sidebar sidelinks={sidelinks} isOpenMobile={false} setIsOpenMobile={() => {}} />
            <main className="flex-1 p-6 overflow-auto bg-slate-100 min-h-screen relative">
        
        {/* Header */}
          <ProfileHeader  username="Abisoye" statuss="Active ✅" />
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
      </>
      
      
        
    )
}

export default Dashboard;