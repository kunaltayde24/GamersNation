import mongoose from "mongoose";

const gameSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    genre: { type: String, required: true },
    developer: { type: String, required: true },
  },
  { timestamps: true }
);

const Game = mongoose.model("Game", gameSchema);
export default Game;
