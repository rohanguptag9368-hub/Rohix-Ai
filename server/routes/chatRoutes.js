import express from "express";

import {
  createChat,
  getAllChats,
  getChat,
  updateChat,
  deleteChat,
  bookmarkChat,
} from "../controllers/chatController.js";

const router = express.Router();

router.post("/create", createChat);

router.get("/", getAllChats);

router.get("/:id", getChat);

router.put("/:id", updateChat);

router.delete("/:id", deleteChat);

router.patch("/:id/bookmark", bookmarkChat);

export default router;