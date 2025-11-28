function Modal({ isOpen, onClose, title, children, actions }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-20" onClick={onClose}></div>

      {/* Modal Box */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                      bg-white rounded-lg shadow-lg p-6 z-30 max-w-md w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2>{title}</h2>
          <button onClick={onClose}>X</button>
        </div>

        {/* Body */}
        <div>{children}</div>

        {/* Footer (optional actions) */}
        {actions && <div className="flex justify-end mt-4 space-x-2">{actions}</div>}
      </div>
    </>
  );
}


export default Modal