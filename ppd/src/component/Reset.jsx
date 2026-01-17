import { TaskContext } from '../context/TaskContext';
import { HabitContext } from '../context/HabitContext';

import { useContext, useEffect } from 'react';

function Reset() {
  const { tasks, setTasks } = useContext(TaskContext);
  const { habits, setHabits } = useContext(HabitContext);

  function resettasks() {
    setTasks([]);
  }

  function resethabits() {
    setHabits([]);
  }

  return (
    <>
      <div className="p-3.5 m-2.5 space-x-3 ">
        <h2 className="text-2xl mb-2.5">Reset Tasks & Habits </h2>
        <button
          onClick={resettasks}
          className="cursor-pointer bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded transition"
        >
          Reset Tasks
        </button>

        <button
          onClick={resethabits}
          className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
        >
          Reset Habits
        </button>
      </div>
    </>
  );
}

export default Reset;
