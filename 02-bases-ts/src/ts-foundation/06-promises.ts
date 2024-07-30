import { http } from '../plugins';

export const getPokemonById = async (id: number | string): Promise<string> => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return (await http.get(url)).name;
  } catch (error) {
    throw `Pokemon not found with id ${id}`;
  }
};
