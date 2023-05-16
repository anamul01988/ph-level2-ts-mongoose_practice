import express from 'express';
import { createUser, getAdminUsers, getUserById, getUsers } from './user.controller';
const router = express.Router();

/*
/
/:id  dynamic
/admins  //probble hoce cause :id er api te call hoye jabe atai admins k :id er upore rakhte hobe
*/

router.get("/",getUsers);
router.get("/admins",getAdminUsers);
router.get("/:id",getUserById);
router.post("/create-user", createUser);
export default router;