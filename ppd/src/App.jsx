import { useState } from "react";
import Navbar from "./component/navbar";
import Sidebar from "./component/sidebar";
import Button from "./component/button";
import Modal from "./component/modal";
import Toast from "./component/toast";
import Statscard from "./component/statscard";
import Progressbar from "./component/progressbar";
import Timeline from "./component/timeline";


function App() {
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toasts, setToasts] = useState([]);


  const timelineData = [
  {
    icon: "✔️",
    status: "success",
    text: "Task 'Write documentation' completed",
    time: "2 minutes ago"
  },
  {
    icon: "📝",
    status: "info",
    text: "New note added to your workspace",
    time: "15 minutes ago"
  },
  {
    icon: "⏱️",
    status: "warning",
    text: "Timer finished for 'Study Session'",
    time: "1 hour ago"
  },
  {
    icon: "📥",
    status: "info",
    text: "You received a shared note from Alex",
    time: "3 hours ago"
  },
  {
    icon: "⚙️",
    status: "success",
    text: "Settings updated successfully",
    time: "Yesterday"
  },
];

  function addToast({ message, type }) {
  const id = Date.now();
  setToasts([...toasts, { id, message, type }]);
  setTimeout(() => removeToast(id), 3000);


}

function removeToast(id) {
  setToasts(toasts.filter(t => t.id !== id));
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
      <Navbar
        links={links}
        isOpenMobile={isOpenMobile}
        setIsOpenMobile={setIsOpenMobile}
      />

      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar
          sidelinks={sidelinks}
          isOpenMobile={isOpenMobile}
          setIsOpenMobile={setIsOpenMobile}
        />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto bg-slate-100 min-h-screen">
             
          <h1 className="text-2xl font-bold mb-4">Dashboard Content</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          
  <Statscard 
    icon="📚"
    title="Notes Created"
    value={42}
    trend="+12 this week"
  />

  <Statscard 
    icon="✅"
    title="Tasks Completed"
    value={18}
    trend="+4 today"
  />

  <Statscard 
    icon="⏱️"
    title="Focus Hours"
    value="3h 20m"
    trend="+40 min"
  />

  <Statscard 
    icon="📈"
    title="Productivity Score"
    value="87%"
    trend="+5%"
  />

</div>

<Progressbar
  value={30}
  color="bg-green-500"
  label="Storage Usage"
  showpercent={true}
/> <br/>

<div className="space-y-6">
  {timelineData.map((item, index) => (
    <Timeline
      key={index}
      icon={item.icon}
      status={item.status}
      text={item.text}
      time={item.time}
    />
  ))}
  </div>

   


        


          {/* Buttons */}
          
         
        </main>
      </div>
    </div>
  );
}

export default App;
