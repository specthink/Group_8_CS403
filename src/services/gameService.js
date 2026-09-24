const gameModel = require("../models/gameModel");

const createGame = (title, genre, platform) => gameModel.create(title, genre, platform);
const getAllGames = () => gameModel.findAll();
const getGameById = (id) => gameModel.findById(id);
const replaceGame = (id, title, genre, platform) => gameModel.replace(id, title, genre, platform);
const updateGame = (game, updates) => gameModel.update(game, updates);
const deleteGame = (id) => gameModel.remove(id);

module.exports = {
  createGame,
  getAllGames,
  getGameById,
  replaceGame,
  updateGame,
  deleteGame
};