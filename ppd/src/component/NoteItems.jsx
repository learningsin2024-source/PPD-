import { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

function NoteItem({ note }) {
  const { deleteNote } = useContext(NotesContext);

  return (
    <div className="border rounded p-4 mb-3 shadow-sm">
      <h3 className="font-semibold text-lg">{note.title}</h3>

      <p className="text-gray-700 mt-2">{note.content}</p>

      <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
        <span>Updated: {new Date(note.updatedAt).toLocaleDateString()}</span>

        <button
          onClick={() => deleteNote(note.id)}
          className="text-red-600 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteItem;
