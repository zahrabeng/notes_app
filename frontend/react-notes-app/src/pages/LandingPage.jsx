import { useEffect, useState } from 'react';
import './styles/LandingPage.css';
import axios from 'axios';
import AddNote from './AddNote';
import ViewNotes from './ViewNotes';

const LandingPage = () => {
    const [noteTitle, setNoteTitle] = useState('');
    const [note, setNote] = useState('');
    const [allNotes, setAllNotes] = useState([]);

    const handleSubmitNote = () => {
        setNoteTitle('');
        setNote('');

        axios
            .post('http://localhost:3000/notes', {
                title: noteTitle,
                description: note,
            })
            .then(() => {
                handleGetAllNotes();
            })
            .catch((error) => console.log(error));
    };

    const handleGetAllNotes = () => {
        axios
            .get('http://localhost:3000/notes')
            .then((response) => setAllNotes(response?.data?.allNotes))
            .catch((error) => console.log(error));
    };

    const handleDeleteNote = (noteId) => {
        axios
            .delete('http://localhost:3000/notes', {
                data: { id: noteId },
            })
            .then(() => {
                handleGetAllNotes();
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        handleGetAllNotes();
    }, []);

    return (
        <div id="landingPageContainer">
            <AddNote
                noteTitle={noteTitle}
                setNoteTitle={setNoteTitle}
                note={note}
                setNote={setNote}
                handleSubmitNote={handleSubmitNote}
            />
            <ViewNotes
                allNotes={allNotes}
                handleDeleteNote={handleDeleteNote}
            />
        </div>
    );
};

export default LandingPage;
