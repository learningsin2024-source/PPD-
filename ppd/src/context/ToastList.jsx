import { useContext } from "react";
import { ToastContext } from "./ToastContext";
import Toast from "../component/toast";

function ToastList() {

  const { toasts, removeToast } = useContext(ToastContext);

  return (
    <div className="fixed top-4 right-4 space-y-3 z-50">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          type={toast.type}
          removeToast={removeToast}
        />
      ))}
    </div>
  );
}

export default ToastList;
