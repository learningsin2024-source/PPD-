import { useEffect } from "react";

function Toast({ id, message, type = "info", removeToast }) {
  
  // Auto-remove after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => removeToast(id), 3000);
    return () => clearTimeout(timer);
  }, [id, removeToast]);

  // Color style based on type
  const typeStyles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-black",
    info: "bg-blue-500 text-white",
  };

  return (
    <div
      className={`min-w-[250px] px-4 py-3 rounded-lg shadow-lg flex justify-between items-center animate-fade-in ${typeStyles[type]}`}
    >
      <span>{message}</span>

      <button
        className="ml-4 font-bold"
        onClick={() => removeToast(id)}
      >
        ✖
      </button>
    </div>
  );
}

export default Toast;
