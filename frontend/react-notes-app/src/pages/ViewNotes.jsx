import NoteCard from '../components/NoteCard';

const ViewNotes = (props) => {
    const { allNotes, handleDeleteNote } = props;

    return (
        <div id={'viewNotesContainer'}>
            {allNotes?.map((note, id) => (
                <div key={id}>
                    <NoteCard note={note} handleDeleteNote={handleDeleteNote} />
                </div>
            ))}
        </div>
    );
};

export default ViewNotes;
