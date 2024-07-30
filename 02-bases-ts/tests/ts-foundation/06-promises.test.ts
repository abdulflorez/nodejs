import { getPokemonById } from '../../src/ts-foundation/06-promises';

describe('ts-foundation/06-promises.ts', () => {
  test('getPokemonById should return a pokemon', async () => {
    const pokemonId = 1;
    const pokemoName = await getPokemonById(pokemonId);

    expect(pokemoName).toBe('bulbasaur');
  });

  test('getPokemonById should return an error if pokemon does not exist', async () => {
    const pokemonId = 9999;
    try {
      const pokemoName = await getPokemonById(pokemonId);
    } catch (error) {
      expect(error).toBe(`Pokemon not found with id ${pokemonId}`);
    }
  });
});
