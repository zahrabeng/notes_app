import './styles/AddNotesPage.css';
import { Box, Text, Input, Textarea, Button } from '@chakra-ui/react';

const AddNote = (props) => {
    const { noteTitle, setNoteTitle, note, setNote, handleSubmitNote } = props;

    return (
        <div id={'addNotesContainer'}>
            <Box
                p="4"
                borderWidth="1px"
                w="100%"
                height="400px"
                borderRadius="4px"
            >
                <Text textStyle="3xl" marginBottom="8px">
                    Add a new note ✍️
                </Text>
                <Input
                    placeholder="Note title"
                    variant="outline"
                    size="lg"
                    marginBottom="8px"
                    onChange={(event) => setNoteTitle(event.target.value)}
                    value={noteTitle}
                />
                <Textarea
                    placeholder="Note"
                    variant="outline"
                    size="lg"
                    height="200px"
                    maxHeight="230px"
                    value={note}
                    onChange={(event) => setNote(event.target.value)}
                />
                <Button
                    onClick={handleSubmitNote}
                    disabled={!noteTitle || !note}
                >
                    Submit note
                </Button>
            </Box>
        </div>
    );
};

export default AddNote;
