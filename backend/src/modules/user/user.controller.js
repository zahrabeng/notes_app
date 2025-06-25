import { usersModel } from "../../../models/user.mode.js"
import bycript from 'bcrypt';
import jwt from 'jsonwebtoken';

const signUp = async (req, res) => {
    const { name, email, password } = req.body;

    const user = await usersModel.findOne({ email });
    if (user) {
        res.json({ message: "user already exists" })
    } else {
        const hash = bycript.hashSync(password, 2);
        await usersModel.insertMany({ name, email, password: hash });
    }
    res.json({ message: "success" })
};

const signIn = async (req, res) => {
    const { email, password } = req.body;

    const user = await usersModel.findOne({ email });
    if (user && bycript.compareSync(password, user.password)) {
        let token = jwt.sign({ id: user.id, name: user.name }, process.env.SECRET_KEY);
        res.json({ message: 'success', token })
    }
    else {
        res.json({ message: "user not found or password incorrect" })
    }
};

export { signIn, signUp }