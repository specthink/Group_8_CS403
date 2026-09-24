const gameService = require("../services/gameService");

const createGame = (req, res) => {
  const { title, genre, platform } = req.body;

  if (!title || !genre || !platform) {
    return res.status(400).send({ error: "title, genre, and platform are required" }); 
  }

  const newGame = gameService.createGame(title, genre, platform); 
  res.status(201).send(newGame); 
};

const getAllGames = (req, res) => {
  res.send(gameService.getAllGames()); 
};

const getGameById = (req, res) => {
  const game = gameService.getGameById(Number(req.params.id));
  if (!game) return res.status(404).send({ error: "Game not found" }); 
  res.send(game);
};

const replaceGame = (req, res) => {
  const id = Number(req.params.id);
  const { title, genre, platform } = req.body;

  if (!title || !genre || !platform) {
    return res.status(400).send({ error: "title, genre, and platform are required for PUT" });
  }

  const replaced = gameService.replaceGame(id, title, genre, platform);
  if (!replaced) return res.status(404).send({ error: "Game not found" });

  res.send(replaced);
};

const updateGame = (req, res) => {
  const game = gameService.getGameById(Number(req.params.id));
  if (!game) return res.status(404).send({ error: "Game not found" });

  const updated = gameService.updateGame(game, req.body); 
  res.send(updated); 
};

const deleteGame = (req, res) => {
  const deleted = gameService.deleteGame(Number(req.params.id)); 
  if (!deleted) return res.status(404).send({ error: "Game not found" }); 
  res.send(deleted); 
};

module.exports = {
  createGame,
  getAllGames,
  getGameById,
  replaceGame,
  updateGame,
  deleteGame
};