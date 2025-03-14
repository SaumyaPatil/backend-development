import express from "express";

import { login, register } from "../controllers/user.js";

const router = express.Router();

//To make it understand ke konse route pe jaana hai!
router.route("/register").post(register);
// router.route("/login").post(login);

export default router;

//Express ki api rest api hoti hai!

