import Navbar from "./component/navbar";
import { useEffect, useState } from "react";

function App (){
    

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

        <Navbar links = {links} />
    )
}

export default App