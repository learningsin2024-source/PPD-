function Progressbar({ value, color = "bg-green-500", label, showpercent }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium">{label}</span>
        {showpercent && <span className="text-gray-700 font-medium">{value}%</span>}
      </div>
      <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
        <div className={`${color} h-4 rounded-full transition-all`} style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
}

export default Progressbar;
