import { useState, useEffect, useContext } from "react";

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

 
  
     
const {tasks, setTasks, addTask, totalTasks, completedTasksCount, pendingTasks,completionPercentage, todayVsYesterdayInsight, mostProductiveDayInsight } = useContext(TaskContext);
const {habits, setHabits, today, totalHabits, activeStreakCount, addHabit, habitDoneToday} = useContext(HabitContext);



 
   

    return (
        <>
    
        
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
            <Statscard icon="✅" title="Tasks Completed" trend={completedTasksCount} />
            { console.log(completedTasksCount)}
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
<div className="my-4 p-4 rounded-lg bg-white shadow flex items-center gap-3">
  <span className="text-2xl">📅</span>

  <div>
    <p className="font-medium text-gray-800">
      {mostProductiveDayInsight.message}
    </p>

    {mostProductiveDayInsight.day && (
      <p className="text-sm text-gray-500">
        Completed {mostProductiveDayInsight.count} task(s) on {mostProductiveDayInsight.day}
      </p>
    )}
  </div>
</div>

<div className="my-4 p-4 rounded-lg bg-white shadow flex items-center gap-3">
  <span className="text-2xl">
    {todayVsYesterdayInsight.trend === "up" && "⬆️"}
    {todayVsYesterdayInsight.trend === "down" && "⬇️"}
    {todayVsYesterdayInsight.trend === "same" && "➖"}
  </span>

  <p
    className={`font-medium ${ todayVsYesterdayInsight.trend === "up" ? "text-green-600" : todayVsYesterdayInsight.trend === "down"
        ? "text-red-600"
        : "text-gray-600"
    }`}
  >
    {todayVsYesterdayInsight.message}
  </p>
</div>

      <div className="space-y-4">
  <Progressbar
    value={(completedTasksCount / totalTasks) * 100}
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
 
      </>
      
      
        
    )
}

export default Dashboard;