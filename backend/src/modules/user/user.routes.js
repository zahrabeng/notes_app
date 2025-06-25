import express from 'express';
import { signUp, signIn } from './user.controller.js';

export const userRouter = express.Router();
userRouter.post('/signUp', signUp);
userRouter.post('/signIn', signIn);