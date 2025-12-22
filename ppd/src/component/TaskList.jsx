import TaskItem from "./TaskItems";

function TaskList({ tasks, setTasks }) {
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      {tasks && tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            callbacks={{ onToggle: toggleTask, onDelete: handleDelete }}
          />
        ))
      ) : (
        <p>No tasks yet.</p>
      )}
    </div>
  );
}

export default TaskList;
