import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./component/navbar";
import Sidebar from "./component/sidebar";
import Button from "./component/button";
import Modal from "./component/modal";
import Toast from "./component/toast";
import Statscard from "./component/statscard";
import Progressbar from "./component/progressbar";
import Timeline from "./component/timeline";
import Activityfeed from "./component/activityfeed";
import QuickAddTask from "./component/quickaddtasks";
import ProfileHeader from "./component/profieheader";

import Avatar from "./assets/Avatar.jpg";
import Profile from "./pages/profile";

function App() {
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuickAddOpen, setIsQuickAddOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  const [activityFeed, setActivityFeed] = useState([
    { icon: "📝", title: "Created note", details: "Added 'Project Ideas' note", time: "2 min ago" },
    { icon: "✔️", title: "Completed task", details: "Finished 'Design UI'", time: "10 min ago" },
  ]);

  function handleAddTask(task) {
    const newActivity = {
      icon: "📝",
      title: "Created task",
      details: task.title,
      time: "Just now",
    };
    setActivityFeed([newActivity, ...activityFeed]);
    addToast({ message: `Task "${task.title}" added`, type: "success" });
  }

  const timelineData = [
    { icon: "✔️", status: "success", text: "Task 'Write documentation' completed", time: "2 minutes ago" },
    { icon: "📝", status: "info", text: "New note added to your workspace", time: "15 minutes ago" },
    { icon: "⏱️", status: "warning", text: "Timer finished for 'Study Session'", time: "1 hour ago" },
    { icon: "📥", status: "info", text: "You received a shared note from Alex", time: "3 hours ago" },
    { icon: "⚙️", status: "success", text: "Settings updated successfully", time: "Yesterday" },
  ];

  function addToast({ message, type }) {
    const id = Date.now();
    setToasts([...toasts, { id, message, type }]);
    setTimeout(() => removeToast(id), 3000);
  }

  function removeToast(id) {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }

  // Sidebar Links
  const sidelinks = [
    { key: 1, name: "Dashboard", icon: "🏠", route: "/" },
    { key: 2, name: "Tasks", icon: "✅", route: "/tasks" },
    { key: 3, name: "Notes", icon: "📝", route: "/notes" },
    { key: 4, name: "Timer", icon: "⏱", route: "/timer" },
    { key: 5, name: "Settings", icon: "⚙️", route: "/settings" },
  ];

  // Navbar Links
  const links = [
    { name: "Dashboard", route: "/" },
    { name: "Tasks", route: "/tasks" },
    { name: "Notes", route: "/notes" },
    { name: "Timer", route: "/timer" },
  ];

  return (
    <>
      {/* Top-level Layout */}
      <div className="flex flex-col h-screen">
        <Navbar
          links={links}
          isOpenMobile={isOpenMobile}
          setIsOpenMobile={setIsOpenMobile}
          email="abisoye@gmail.com"
          username="Tyzon"
          created="july"
        />

        <div className="flex flex-1">
          <Sidebar
            sidelinks={sidelinks}
            isOpenMobile={isOpenMobile}
            setIsOpenMobile={setIsOpenMobile}
          />

          {/* Main Content — React Router controls what appears here */}
          <main className="flex-1 p-6 overflow-auto bg-slate-100 min-h-screen">

            <Routes>
              {/* Dashboard Route */}
              <Route
                path="/"
                element={
                  <>
                    <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

                    <ProfileHeader photo={Avatar} username="Abisoye" statuss="Active ✅" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <Statscard icon="📚" title="Notes Created" value={42} trend="+12 this week" />
                      <Statscard icon="✅" title="Tasks Completed" value={18} trend="+4 today" />
                      <Statscard icon="⏱️" title="Focus Hours" value="3h 20m" trend="+40 min" />
                      <Statscard icon="📈" title="Productivity Score" value="87%" trend="+5%" />
                    </div>

                    <Progressbar value={30} color="bg-slate-950" label="Storage Usage" showpercent={true} />
                    <br />

                    <div className="space-y-6 mb-6">
                      {timelineData.map((item, i) => (
                        <Timeline key={i} {...item} />
                      ))}
                    </div>

                    <div className="flex flex-col space-y-4 mb-6">
                      {activityFeed.map((act, i) => (
                        <Activityfeed key={i} {...act} />
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6">
                      <Button variant="primary" size="md" onClick={() => setIsModalOpen(true)}>
                        Open Modal
                      </Button>
                      <Button onClick={() => setIsQuickAddOpen(true)}>Add Task</Button>
                    </div>

                    <QuickAddTask
                      isOpen={isQuickAddOpen}
                      onClose={() => setIsQuickAddOpen(false)}
                      onAdd={handleAddTask}
                    />

                    <Modal
                      isOpen={isModalOpen}
                      onClose={() => setIsModalOpen(false)}
                      title="Example Modal"
                      actions={[
                        <Button key="cancel" variant="outline" onClick={() => setIsModalOpen(false)}>
                          Cancel
                        </Button>,
                        <Button key="save" variant="primary">Save</Button>,
                      ]}
                    >
                      <p>This is the modal content.</p>
                    </Modal>
                  </>
                }
              />

              {/* Profile Page */}
              <Route path="/profile" element={<Profile />} />
              

            </Routes>

            {/* Toasts */}
            <div className="fixed top-4 right-4 flex flex-col space-y-2 z-50">
              {toasts.map((t) => (
                <Toast key={t.id} message={t.message} type={t.type} onClose={() => removeToast(t.id)} />
              ))}
            </div>

          </main>
        </div>
      </div>
    </>
  );
}

export default App;
