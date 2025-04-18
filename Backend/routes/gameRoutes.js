import express from "express";
import { getGames, addGame, updateGame, deleteGame } from "../controllers/gameController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getGames);
router.post("/", protect, addGame);
router.put("/:id", protect, updateGame);
router.delete("/:id", protect, deleteGame);

export default router;