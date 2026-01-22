import { useContext } from 'react';
import TaskList from '../component/TaskList';
import { TaskContext } from '../context/TaskContext';

function Tasks() {
  const { tasks, setTasks } = useContext(TaskContext);

  return (
    <div className="">
      <h4 className="text-2xl text-center font-sans mb-2.5s">Tasks Created</h4>
      <TaskList tasks={tasks} setTasks={setTasks}></TaskList>;
    </div>
  );
}

export default Tasks;
