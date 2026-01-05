import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import  UserProvider  from './context/UserContext.jsx';
import SidebarProvider from './context/SidebarContext.jsx';
import ModalContextProvider from './context/ModalContext.jsx';
import TaskProvider from './context/TaskContext.jsx';
import HabitProvider from './context/HabitContext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
     <UserProvider>
      <SidebarProvider>
      <ModalContextProvider>
      <TaskProvider>
      <HabitProvider>
    <App />
    </HabitProvider>
    </TaskProvider>
    </ModalContextProvider>
    </SidebarProvider>
    </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
