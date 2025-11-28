import Navbar from "./component/navbar";
import { useEffect, useState } from "react";
import Sidebar from "./component/sidebar";

function App (){
    const [isOpenMobile, setIsOpenMobile] = useState(false);
    
const sidelinks = [
  { key: 1, name: "Dashboard", icon: "🏠" },
  { key: 2, name: "Tasks", icon: "✅" },
  { key: 3, name: "Notes", icon: "📝" },
  { key: 4, name: "Timer", icon: "⏱" },
  { key: 5, name: "Settings", icon: "⚙️" },
]

 const  links = [{
        name : "Dashboard",
        route : "/dasboard",
        key : 1
    }, {
        name : "Tasks",
        route : "/tasks",
        key : 2
    },{
        name : "Notes",
        route : "/notes",
        key : 3 
    },{
        name : "Timer",
        route : "/timer",
        key : 4
    }, ]

    return (

        <>
       
    <div class="flex flex-col h-screen">
           <Navbar links = {links}  isOpenMobile = {isOpenMobile} setIsOpenMobile = {setIsOpenMobile} />
        <div class="flex flex-1">
      <Sidebar sidelinks = {sidelinks} isOpenMobile = {isOpenMobile} setIsOpenMobile = {setIsOpenMobile} />
        </div>
    </div>
        </>
    )
}

export default App