import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ProfilePage from './component/ProfilePage.jsx';
import Setting from './pages/settings.jsx';

import Navbar from './component/navbar';
import Sidebar from './component/sidebar';
import Notes from './pages/Notes.jsx';

function App() {
  // Sidebar and Navbar links
  const sidelinks = [
    { key: 1, name: 'Dashboard', icon: '🏠', route: '/' },
    { key: 2, name: 'Tasks', icon: '✅', route: '/tasks' },
    { key: 3, name: 'Notes', icon: '📝', route: '/notes' },
    { key: 5, name: 'Settings', icon: '⚙️', route: '/settings' },
  ];

  const links = [
    { name: 'Dashboard', path: '/', key: 1 },
    { name: 'Tasks', path: '/tasks', key: 2 },
    { name: 'Notes', path: '/notes', key: 3 },
    { name: 'settings', path: '/settings', key: 4 },
  ];

  return (
    <div className="flex flex-col h-screen">
      <Navbar links={links} isOpenMobile={false} setIsOpenMobile={() => {}} />

      <div className="flex flex-1">
        <Sidebar
          sidelinks={sidelinks}
          isOpenMobile={false}
          setIsOpenMobile={() => {}}
        />
        <main className="flex-1 p-6 overflow-auto bg-slate-100 min-h-screen relative">
          <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<Setting />} />
            <Route path="/notes" element={<Notes />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
