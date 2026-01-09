import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "../context/SidebarContext";

function Sidebar({ sidelinks }) {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const [col, setCol] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={`hidden md:flex flex-col  bg-slate-950 transition-all
        ${col ? "w-20" : "w-64"}`}
      >
        <ul className="flex flex-col m-3 text-white text-xl space-y-6">
          {sidelinks.map(link => (
            <Link
              key={link.key}
              to={link.route}
              className="flex items-center space-x-2 hover:text-blue-400"
            >
              <span>{link.icon}</span>
              {!col && <span>{link.name}</span>}
            </Link>
          ))}
        </ul>

        <button
          onClick={() => setCol(!col)}
          className="mt-auto p-2 text-white hover:bg-slate-900"
        >
          {col ? "➡ Expand" : "⬅ Collapse"}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-slate-950
        transform transition-transform duration-300 md:hidden
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="flex flex-col m-3 text-white space-y-6">
          {sidelinks.map(link => (
            <Link
              key={link.key}
              to={link.route}
              onClick={closeSidebar}
              className="flex items-center space-x-2 hover:text-blue-400"
            >
              <span className="text-2xl">{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
