import { createContext, useState, useEffect } from 'react';

export const NotesContext = createContext();

const mock_keys = 'ppd_notes';

const mock = [
  {
    id: crypto.randomUUID(),
    title: '2026 new year plan',
    content: 'this is a new year plan, I am going to do a lot of things',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  {
    id: crypto.randomUUID(),
    title: '2026 c plan',
    content:
      'Making effective short notes involves a systematic approach. Begin by skimming the material to identify key points and headings. Use abbreviations, symbols, and keywords to condense information.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  {
    id: crypto.randomUUID(),
    title: '2026 c plan',
    content:
      'Making effective short notes involves a systematic approach. Begin by skimming the material to identify key points and headings. Use abbreviations, symbols, and keywords to condense information.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

function loadNotes() {
  try {
    const raw = localStorage.getItem(mock_keys);
    if (!raw) return mock;

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return mock;
    return parsed;
  } catch (error) {
    console.error('Failed to load Notes:', error);
    return mock;
  }
}

function NotesProvider({ children }) {
  const [notes, setNotes] = useState(() => loadNotes());

  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  function updateNote(id, title, content) {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? { ...note, title, content, updatedAt: new Date().toISOString() }
          : note,
      ),
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

  useEffect(() => {
    localStorage.setItem(mock_keys, JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
}

export default NotesProvider;
