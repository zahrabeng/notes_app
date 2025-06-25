import { notesModel } from "../../../models/notes.model.js";

const addNote = async (req, res) => {
    const { title, description, createdBy } = req.body;

    await notesModel.insertMany({ title, description, createdBy }).then(() => {
        res.json({ message: "successfully added note" })
    }).catch((err) => {
        res.json({ error: err})
    });
}

/**
 * updateOne() -> updates the first value it finds
 * updateMany() -> updates all the values it finds 
 * replaceOne() -> replaces the value with the new object you give it
 * findByIdAndUpdate() -> better performance, binary search
 * findOneAndReplace()
 * findOneAndUpdate()
 */
const updateNote = async (req, res) => {
    const { title, description, id } = req.body;

    let note = await notesModel.findByIdAndUpdate('6856ba7a9bacda526b446470', { title, description, id  }, { new: true });

    try {
        !note ? res.json("note not found") : res.json({ message: "successfully updated note", note });
    } catch (error) {
        res.json({error: err});
    }
}

/**
 * deleteOne() -> deletes the first value it finds
 * deleteMany() -> deletes all the values it finds 
 * findByIdAndDelete() -> better performance, binary search
 * findOneAndDelete() -> 
 * findOneAndRemove() -> depricated
 * findByIdAndRemove() -> depricated
 * remove() -> depricated
 */
const deleteNote = async (req, res) => {
    const { id } = req.body;
    let note = await notesModel.findByIdAndDelete(id);

    try {
        !note ? res.json("note not found") : res.json({ message: "successfully deleted note", note });
    } catch (error) {
        res.json({error: err});
    }
}

/**
 * populate() -> part of mongoose ODM
 */
const getAllNotes = async (req, res) => {
    let allNotes = await notesModel.find({});
    
    try {
        res.json({ message: "all notes success", allNotes })
    } catch (error) {
        res.json({ error: err})
    }
};

const getUserNotes = async (req, res) => {
    const { createdBy } = req.params;
    let userNotes = await notesModel.find({}).populate(createdBy, 'name -_id');

    try {
        res.json({message: "user notes success", userNotes})
    } catch (error) {
        res.json({error: err});
    }
};

export { addNote, updateNote, deleteNote, getAllNotes, getUserNotes };

