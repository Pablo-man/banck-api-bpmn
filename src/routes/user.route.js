import { Router } from "express";
import { createUser, deleteUser, listUsers, updateUser, listUser } from "../controllers/user.controller.js";

const router = Router()             

//router.post('/', createUser)

router.put('/', updateUser)

router.delete('/:id', deleteUser)

router.get('/', listUsers)

router.post('/', listUser)

export default router;