import { Card, Button } from '@chakra-ui/react';

const NoteCard = (props) => {
    const { note, handleDeleteNote } = props;

    return (
        <Card.Root
            width="320px"
            variant={'outline'}
            key={'outline'}
            marginBottom="12px"
        >
            <Card.Body gap="2">
                <Card.Title mb="2">{note?.title}</Card.Title>
                <Card.Description>{note?.description}</Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
                <Button variant="outline">Update</Button>
                <Button onClick={() => handleDeleteNote(note?._id)}>
                    Delete
                </Button>
            </Card.Footer>
        </Card.Root>
    );
};

export default NoteCard;
