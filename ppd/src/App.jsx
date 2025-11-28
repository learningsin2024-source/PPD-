import { useState } from "react";
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

function App() {
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuickAddOpen, setIsQuickAddOpen] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [activityFeed, setActivityFeed] = useState([
    { icon: "📝", title: "Created note", details: "Added 'Project Ideas' note", time: "2 min ago" },
    { icon: "✔️", title: "Completed task", details: "Finished 'Design UI'", time: "10 min ago" },
  ]);

  // Add new task & activity feed
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
    setToasts(toasts.filter((t) => t.id !== id));
  }

  const sidelinks = [
    { key: 1, name: "Dashboard", icon: "🏠" },
    { key: 2, name: "Tasks", icon: "✅" },
    { key: 3, name: "Notes", icon: "📝" },
    { key: 4, name: "Timer", icon: "⏱" },
    { key: 5, name: "Settings", icon: "⚙️" },
  ];

  const links = [
    { name: "Dashboard", route: "/dashboard", key: 1 },
    { name: "Tasks", route: "/tasks", key: 2 },
    { name: "Notes", route: "/notes", key: 3 },
    { name: "Timer", route: "/timer", key: 4 },
  ];

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar links={links} isOpenMobile={isOpenMobile} setIsOpenMobile={setIsOpenMobile} />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar sidelinks={sidelinks} isOpenMobile={isOpenMobile} setIsOpenMobile={setIsOpenMobile} />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto bg-slate-100 min-h-screen">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Statscard icon="📚" title="Notes Created" value={42} trend="+12 this week" />
            <Statscard icon="✅" title="Tasks Completed" value={18} trend="+4 today" />
            <Statscard icon="⏱️" title="Focus Hours" value="3h 20m" trend="+40 min" />
            <Statscard icon="📈" title="Productivity Score" value="87%" trend="+5%" />
          </div>

          {/* Progress Bar */}
          <Progressbar value={30} color="bg-green-500" label="Storage Usage" showpercent={true} />
          <br />

          {/* Timeline */}
          <div className="space-y-6 mb-6">
            {timelineData.map((item, index) => (
              <Timeline key={index} icon={item.icon} status={item.status} text={item.text} time={item.time} />
            ))}
          </div>

          {/* Activity Feed */}
          <div className="flex flex-col space-y-4 mb-6">
            {activityFeed.map((activity, index) => (
              <Activityfeed
                key={index}
                icon={activity.icon}
                details={activity.details}
                time={activity.time}
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-6">
            <Button variant="primary" size="md" onClick={() => setIsModalOpen(true)}>
              Open Modal
            </Button>
            <Button onClick={() => setIsQuickAddOpen(true)}>Add Task</Button>
          </div>

          {/* Quick Add Task Modal */}
          <QuickAddTask isOpen={isQuickAddOpen} onClose={() => setIsQuickAddOpen(false)} onAdd={handleAddTask} />

          {/* Example Modal */}
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Example Modal"
            actions={[
              <Button key="cancel" variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>,
              <Button key="save" variant="primary">Save</Button>,
            ]}
          >
            <p>This is the modal content. You can put a form, text, or anything here.</p>
          </Modal>

          {/* Toasts */}
          <div className="fixed top-4 right-4 flex flex-col space-y-2 z-50">
            {toasts.map((t) => (
              <Toast key={t.id} message={t.message} type={t.type} onClose={() => removeToast(t.id)} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
