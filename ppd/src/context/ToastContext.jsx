import { createContext, useState, useCallback } from "react";


 export const ToastContext = createContext();

 function ToastProvider ({children}) {

 const [toasts, setToasts] = useState([])

 
function addToast(message, type) {
  const id = Date.now(); // unique id

  const newToast = { id, message, type };

  setToasts(prevToasts => [...prevToasts, newToast]);
}

function removeToast(id) {
  setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
}


return(
 
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>

        {children}

    </ToastContext.Provider>
)

 }

 export default ToastProvider