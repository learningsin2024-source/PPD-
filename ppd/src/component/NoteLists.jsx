import NoteItem from './NoteItems';

function NoteList({ notes, deleteNote, className }) {
  return (
    <div className={className}>
      {notes && notes.length > 0 ? (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            callbacks={{ onDelete: deleteNote }}
          />
        ))
      ) : (
        <p className="text-center text-red-600">
          No notes yet. Create your first note.
        </p>
      )}
    </div>
  );
}

export default NoteList;
