import express from "express";
import{
    getUser,
    getUserFriends,
    addRemoveFriend,
    getAllUsers,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/:id",verifyToken,getUser);
router.get("/",verifyToken,getAllUsers)
router.get("/:id/friends",verifyToken,getUserFriends);

router.patch("/:id/:friendId",verifyToken,addRemoveFriend);

export default router;