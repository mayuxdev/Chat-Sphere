import { Router } from "express";
import { getMessages } from "../controllers/messageController.js";

const router = Router();

router.get("/:room", getMessages);

export default router;