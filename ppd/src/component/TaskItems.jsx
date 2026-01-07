


function TaskItem({ task, callbacks }) {
  if (!task) return null; // safety check


  const { id, title, completed, completedAt} = task;
  const { onToggle, onDelete } = callbacks;

  return (
    <div className="p-4 m-2 bg-white shadow rounded flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={completed }
          onChange={() => onToggle(id)}
        />
        <p className={completed  ? "line-through text-gray-400" : ""}>{title}</p>
     
      </div>
      <button
        onClick={() => onDelete(id)}
        className="text-red-500 hover:text-red-700 font-bold"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;

