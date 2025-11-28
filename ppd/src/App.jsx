import { useState } from "react";
import Navbar from "./component/navbar";
import Sidebar from "./component/sidebar";
import Button from "./component/button";
import Modal from "./component/modal";

function App() {
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <Modal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  title="Example Modal"
  actions={[
    <Button key="cancel" variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>,
    <Button key="save" variant="primary">Save</Button>
  ]}
>
  <p>This is the modal content. You can put a form, text, or anything here.</p>
</Modal>
        


          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="md">
              Save
            </Button>
            <Button variant="outline" size="sm">
              Cancel
            </Button>
            <Button variant="danger" disabled>
              Delete
            </Button>
            <Button onClick={() => setIsModalOpen(true)}>Add Note</Button>
          </div>
         
        </main>
      </div>
    </div>
  );
}

export default App;
