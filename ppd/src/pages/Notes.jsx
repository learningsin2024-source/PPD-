import Notelist from '../component/NoteLists';
import { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';
import AddNoteForm from '../component/AddNoteForm';

function Notes() {
  const { notes, deleteNote, addNote } = useContext(NotesContext);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">My Notes</h1>
        <AddNoteForm addNote={addNote} />
      </div>

      <Notelist
        notes={notes}
        deleteNote={deleteNote}
        className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      />
    </div>
  );
}

export default Notes;
