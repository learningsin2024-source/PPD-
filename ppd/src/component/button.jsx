

function Button({ variant = "primary", size = "md", disabled = false, children, onClick }) {
  const base = "inline-flex items-center justify-center font-medium rounded-lg transition-all active:scale-[.97]";

  const variants = {
    primary: "bg-slate-950 text-white hover:bg-slate-800",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed pointer-events-none";

  const className = `${base} ${variants[variant]} ${sizes[size]} ${disabled ? disabledStyles : ""}`;

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
