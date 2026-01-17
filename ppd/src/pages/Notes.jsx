import Notelist from '../component/NoteLists';
import { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

function Notes() {
  const { notes, deleteNote } = useContext(NotesContext);

  return (
    <Notelist
      notes={notes}
      deleteNote={deleteNote}
      className="p-4 m-2 bg-white shadow rounded flex items-center justify-between"
    />
  );
}

export default Notes;
