function Activityfeed({ icon, details, time }) {
  return (
    <div className="flex items-start gap-3 bg-white shadow-sm rounded-lg p-3 hover:shadow-md transition-shadow">
      <span className="text-2xl mt-1">{icon}</span>
      <div>
        <p className="text-gray-800 font-medium">{details}</p>
        <p className="text-gray-500 text-sm">{time}</p>
      </div>
    </div>
  );
}

export default Activityfeed;
