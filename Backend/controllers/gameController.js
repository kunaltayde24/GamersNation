import Game from "../models/Game.js";

export const getGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const addGame = async (req, res) => {
  const { title, description, price, genre, developer } = req.body;
  
  try {
    const game = await Game.create({ title, description, price, genre, developer });
    res.status(201).json(game);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const updateGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(game);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const deleteGame = async (req, res) => {
  try {
    await Game.findByIdAndDelete(req.params.id);
    res.json({ message: "Game deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
