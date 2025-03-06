import express from "express";
import { login, register } from "../controllers/user.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

const router = express.Router();

// -> /register is endpoint 
//isAuthenticated is middleware that is always hit before passing any data
router.route("/register").post(isAuthenticated,register);

router.route("/login").post(login);

export default router;
