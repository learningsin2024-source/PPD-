function Modal({ isOpen, onClose, title, children, actions }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-xl"
        >
          ×
        </button>

        {/* Title */}
        {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}

        {/* Content */}
        <div className="mb-6">{children}</div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          {actions && actions.map((action, index) => <div key={index}>{action}</div>)}
        </div>
      </div>
    </div>
  );
}

export default Modal;

