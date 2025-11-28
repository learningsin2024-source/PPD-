function Timeline({ icon, status, text, time }) {
  const statusColors = {
    success: "text-green-500",
    info: "text-blue-500",
    warning: "text-yellow-500",
    error: "text-red-500",
  };

  return (
    <div className="flex items-start gap-3">
      <span className={`text-2xl mt-1 ${statusColors[status]}`}>{icon}</span>
      <div>
        <p className="text-gray-800 font-medium">{text}</p>
        <p className="text-gray-500 text-sm">{time}</p>
      </div>
    </div>
  );
}

export default Timeline;
