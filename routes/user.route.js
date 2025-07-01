import { Router } from "express";
import { addUser, getUser, updateUser } from "../controller/user.controller.js";

const router = Router();

router.get(`/`, getUser).post(`/`, addUser).put(`/:id`, updateUser);

export default router;
