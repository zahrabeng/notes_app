import express from 'express';
import {
    addNote,
    updateNote,
    deleteNote,
    getAllNotes,
    getUserNotes,
} from './notes.controller.js';
// import { auth } from '../../middleware/auth.js'; removed auth for now until we add login page so we can pass the token in api req

export const notesRouter = express.Router();

//post
// notesRouter.post('/', auth, addNote);
notesRouter.post('/', addNote);

//put
// notesRouter.put('/', auth, updateNote);
notesRouter.put('/', updateNote);

// //delete
// notesRouter.delete('/', auth, deleteNote);
notesRouter.delete('/', deleteNote);

// ///get
// notesRouter.get('/', auth, getAllNotes);
// notesRouter.get('/:createdBy', auth, getUserNotes);
notesRouter.get('/', getAllNotes);
notesRouter.get('/:createdBy', getUserNotes);
