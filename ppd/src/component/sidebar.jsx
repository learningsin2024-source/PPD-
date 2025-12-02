import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar({ sidelinks, isOpenMobile, setIsOpenMobile }) {
  const [col, setCol] = useState(false); 
  

  return (
    <>
    <div
      className={`hidden md:flex flex-col h-full bg-slate-950 transition-all duration-300 ${
        col ? "w-20" : "w-64"
      }`}
    >
    
      <ul className="flex flex-col m-3 text-white space-y-6">
        {sidelinks.map((link) => (
          <Link to = {link.route}
            key={link.key}
            className="cursor-pointer hover:text-blue-400 hover:underline text-xl flex items-center space-x-2"
          >
            <span>{link.icon}</span>
            {!col && <span>{link.name}</span>} 
          </Link>
        ))}
      </ul>

   
      <button
        onClick={() => setCol(!col)}
        type="button"
        className="mt-auto p-2 text-white hover:bg-slate-900"
      >
        {col ? "➡ Expand" : "⬅ Collapse"}
      </button>
    </div>

    <div
      className={`flex md:hidden flex-col h-full bg-slate-950 transition-all duration-300 ${
        isOpenMobile ? "w-15" : "w-35"
      }`}
    >
            
     <ul className="flex flex-col m-3 text-white space-y-6">
        {sidelinks.map((link) => (
          <li
            key={link.key}
            className="cursor-pointer hover:text-blue-400 hover:underline flex items-center space-x-2"
          >
            <span>{link.icon}</span>
            {!isOpenMobile && <span>{link.name}</span>} 
          </li>
        ))}
      </ul>

    </div>

</>
  ) 

      
  
  
  
}

export default Sidebar;
