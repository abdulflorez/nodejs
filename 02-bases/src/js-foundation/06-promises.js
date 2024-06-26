const { http } = require('../plugins');

const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  return console.log((await http.get(url)).name);
};

module.exports = {
  getPokemonById,
};
