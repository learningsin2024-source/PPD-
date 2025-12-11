import { createContext, useState } from "react";

 export const SidebarContext = createContext();


 function SidebarProvider ({children}) {
const [isSidebarOpen, setIsSidebarOpen] = useState(false)

function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen)
}

function openSidebar()
 {
    setIsSidebarOpen(true)

 } 

 function closeSidebar() {
    setIsSidebarOpen(false)
 }


return (

    <SidebarContext.Provider value={{isSidebarOpen, toggleSidebar, openSidebar, closeSidebar}}>
        {children}
    </SidebarContext.Provider>
)
}


export default SidebarProvider