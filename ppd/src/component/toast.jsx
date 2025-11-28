function Toast({ message, type = "info", onClose }) {
  const typeColors = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  };

  return (
    <div
      className={`${typeColors[type]} text-white px-4 py-2 rounded-md shadow-md flex items-center justify-between w-64 animate-slideIn`}
    >
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 font-bold hover:text-gray-200">
        ×
      </button>
    </div>
  );
}

export default Toast;
