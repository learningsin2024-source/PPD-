

import { useState } from "react";
import Button from "./button";

function QuickAddTask({ isOpen, onClose, onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title, description, time: new Date().toLocaleTimeString() });
    setTitle("");
    setDescription("");
    onClose();
  }

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-20"
        onClick={onClose}
      ></div>

      {/* Modal/Form */}
      <div className="fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add New Task</h2>
        <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Task Title"
            className="border rounded-md p-2 w-full focus:outline-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Description (optional)"
            className="border rounded-md p-2 w-full focus:outline-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Add Task
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default QuickAddTask;
