import express from 'express'
import { signin, signup } from '../controllers/auth.controller.js';
const authrouter=express.Router();
authrouter.post("/signup",signup);
authrouter.post("/signin",signin)
export default authrouter;