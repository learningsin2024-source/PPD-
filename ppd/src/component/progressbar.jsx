function Progressbar({ value, color, label, showpercent }) {
  return (
    <div className="flex flex-col gap-1">

      {label && <p className="text-sm font-medium">{label}</p>}

      
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
      
        <div
          className={`h-full rounded-full transition-all ${color}`}
          style={{ width: `${value}%` }}
        ></div>
      </div>

      
      {showpercent && (
        <p className="text-sm font-medium text-gray-700">{value}%</p>
      )}
    </div>
  );
}

export default Progressbar;