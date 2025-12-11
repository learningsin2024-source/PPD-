

function Modal({ isOpen, onClose, title, children, actions  }) {


  return (
    <>


      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">

            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-black hover:text-black"
              onClick={onClose}
            >
              ✖
            </button>

            {/* Title */}
            {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}

            {/* Content */}
            <div className="mb-6">{children}</div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3">
              {actions?.map((action, i) => (
                <div key={i}>{action}</div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
