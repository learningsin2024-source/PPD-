import { useEffect } from "react";

function Toast({ message, type = "info", duration = 3000, onClose }) {
  // Map type to background color classes
  const typeClasses = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  };

  // Auto-hide after duration
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <div
        className={`flex items-center justify-between rounded-md shadow-md p-3 text-white min-w-[200px] ${typeClasses[type]}`}
      >
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-4 font-bold text-white hover:text-gray-200"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Toast;