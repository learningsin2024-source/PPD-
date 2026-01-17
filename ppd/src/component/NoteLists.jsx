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
        <div className="col-span-full rounded-lg border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
          <p className="text-gray-500">
            No notes yet. Create your first note ✨
          </p>
        </div>
      )}
    </div>
  );
}

export default NoteList;
