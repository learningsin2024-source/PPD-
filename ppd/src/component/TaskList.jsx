import TaskItem from './TaskItems';

function TaskList({ tasks, setTasks, ClassName }) {
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== id) return task;

        const isCompleting = !task.completed;

        return {
          ...task,
          completed: isCompleting,
          completedAt: isCompleting ? new Date().toISOString() : null,
        };
      })
    );
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className={ClassName}>
      {tasks && tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            callbacks={{ onToggle: toggleTask, onDelete: handleDelete }}
          />
        ))
      ) : (
        <p className="text-center text-red-600">
          No tasks yet. Create your first task to see stats{' '}
        </p>
      )}
    </div>
  );
}

export default TaskList;
