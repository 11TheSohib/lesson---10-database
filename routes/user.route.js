import { Router } from "express";
import {
  addUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controller/user.controller.js";

const router = Router();

router
  .get(`/`, getUser)
  .post(`/`, addUser)
  .put(`/:id`, updateUser)
  .delete(`/:id`, deleteUser);

export default router;
