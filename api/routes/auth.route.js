import express from 'express'
import { google, signin, signup } from '../controllers/auth.controller.js';
const authrouter=express.Router();
authrouter.post("/signup",signup);
authrouter.post("/signin",signin);
authrouter.post("/google",google);
export default authrouter;