import express from "express";
import { sendMessage } from "../controller/messageController.js";

const router = express.Router();

// POST route (for submitting messages)
router.post("/send", sendMessage);

// ✅ GET route (for testing in the browser)
router.get("/send", (req, res) => {
  res.json({ message: "API is working! But use POST to send a message." });
});

export default router;
