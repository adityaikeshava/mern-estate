import express from 'express'
import { signup } from '../controllers/auth.controller.js';
const authrouter=express.Router();
authrouter.post("/signup",signup)
export default authrouter;