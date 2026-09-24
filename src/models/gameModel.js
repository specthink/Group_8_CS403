const games = [
  { id: 1, title: "Wuthering Waves", genre: "RPG", platform: "PC/Mobile" },
  { id: 2, title: "Punishing: Gray Ravens", genre: "Action RPG", platform: "PC/Mobile" },
  { id: 3, title: "Valorant", genre: "FPS", platform: "PC" }
];

let nextId = games.length + 1;

const create = (title, genre, platform) => {
  const newGame = { id: nextId++, title, genre, platform };
  games.push(newGame);
  return newGame;
};

const findAll = () => games;

const findById = (id) => games.find(g => g.id === id);

// Full replace (PUT)
const replace = (id, title, genre, platform) => {
  const index = games.findIndex(g => g.id === id);
  if (index === -1) return null;
  games[index] = { id, title, genre, platform };
  return games[index];
};


const update = (game, updates) => {
  const { title, genre, platform } = updates;
  if (title !== undefined) game.title = title;
  if (genre !== undefined) game.genre = genre;
  if (platform !== undefined) game.platform = platform;
  return game;
};

const remove = (id) => {
  const index = games.findIndex(g => g.id === id);
  if (index === -1) return null;
  const [deleted] = games.splice(index, 1);
  return deleted;
};

module.exports = { create, findAll, findById, replace, update, remove };