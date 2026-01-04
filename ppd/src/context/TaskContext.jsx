import { createContext, useState } from "react";


 export const TaskContext = createContext();

function TaskProvider ({children}) {
 const TASKS_KEY = "ppd_tasks";
 
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
    const taskCompletion = (completedTasks / totalTasks) * 100;
    return (

        <>
        
        <TaskContext.Provider value = {{tasks, setTasks, addTask, totalTasks, completedTasks, pendingTasks,completionPercentage, taskCompletion  }} >

                        {children}
        </TaskContext.Provider>
        
        </>
    )
}


export default TaskProvider;