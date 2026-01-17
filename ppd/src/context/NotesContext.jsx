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

  function deleteNotes(id) {
    notes.filter((note) => note.id !== id);
  }

  function updateNote(id, title, content) {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? {
              ...note,
              title,
              content,
              updatedAt: new Date().toISOString(),
            }
          : note
      )
    );
  }

  function addNotes(title, content) {
    const newNotes = {
      id: new Date.now(),
      title,
      content,
      createdAt: new Date().toLocaleDateString(),
      updatedAt: 'later',
    };

    setNotes((prev) => [...prev, newNotes]);
  }

  return (
    <NotesContext.Provider
      value={{
        notes,
        setNotes,
        addNotes,
        updateNote,
        deleteNotes,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export default NotesProvider;
