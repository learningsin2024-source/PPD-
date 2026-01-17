import { createContext, useState } from 'react';

export const NotesContext = createContext();

function NotesProvider({ children }) {
  const [notes, setNotes] = useState([
    {
      id: Date.now(),
      title: '2026 new year plan',
      content: 'this is a new year plan, I am going to do a lot of things',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ]);

  function deleteNote(id) {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  }

  function updateNote(id, title, content) {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? { ...note, title, content, updatedAt: new Date().toISOString() }
          : note
      )
    );
  }

  function addNote(title, content) {
    const now = new Date().toISOString();

    const newNote = {
      id: Date.now(),
      title,
      content,
      createdAt: now,
      updatedAt: now,
    };

    setNotes((prev) => [...prev, newNote]);
  }

  return (
    <NotesContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
}

export default NotesProvider;
