import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidebarContext } from '../context/SidebarContext';

function Sidebar({ sidelinks }) {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const isActive = (route) => location.pathname === route;

  return (
    <>
      {/* ===================== DESKTOP SIDEBAR ===================== */}
      <aside
        className={`hidden md:flex flex-col bg-slate-950 text-white
        transition-all duration-300
        ${collapsed ? 'w-20' : 'w-64'}`}
      >
        {/* Brand */}
        <div className="px-4 py-6 text-xl font-bold tracking-wide border-b border-slate-800">
          {collapsed ? '⚡' : 'PPD'}
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6">
          <ul className="space-y-2">
            {sidelinks.map((link) => (
              <Link
                key={link.key}
                to={link.route}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg
                transition-colors
                ${
                  isActive(link.route)
                    ? 'bg-slate-800 text-blue-400'
                    : 'hover:bg-slate-900'
                }`}
              >
                <span className="text-xl">{link.icon}</span>
                {!collapsed && (
                  <span className="text-sm font-medium">{link.name}</span>
                )}
              </Link>
            ))}
          </ul>
        </nav>

        {/* Collapse Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="m-3 px-3 py-2 rounded-lg text-sm
          bg-slate-900 hover:bg-slate-800 transition"
        >
          {collapsed ? '➡ Expand' : '⬅ Collapse'}
        </button>
      </aside>

      {/* ===================== MOBILE SIDEBAR ===================== */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-slate-950 text-white
        transform transition-transform duration-300 md:hidden
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Mobile Header */}
        <div className="px-4 py-5 text-xl font-bold border-b border-slate-800">
          TYZ
        </div>

        <nav className="px-3 py-6">
          <ul className="space-y-3">
            {sidelinks.map((link) => (
              <Link
                key={link.key}
                to={link.route}
                onClick={closeSidebar}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg
                transition-colors
                ${
                  isActive(link.route)
                    ? 'bg-slate-800 text-blue-400'
                    : 'hover:bg-slate-900'
                }`}
              >
                <span className="text-xl">{link.icon}</span>
                <span className="text-sm font-medium">{link.name}</span>
              </Link>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
