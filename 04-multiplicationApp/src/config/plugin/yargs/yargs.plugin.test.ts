// import { yarg } from './yargs.plugin';

describe('Test yargs.plugin.ts', () => {
  const originalArgv = process.argv;

  const runCommand = async (args: string[]) => {
    process.argv = [...process.argv, ...args];
    const { yarg } = await import('./yargs.plugin');
    return yarg;
  };

  beforeEach(() => {
    process.argv = originalArgv;
    jest.resetModules();
  });

  test('should return default values', async () => {
    const argv = await runCommand(['-b', '5']);
    console.log(argv);

    expect(argv).toEqual(
      expect.objectContaining({
        _: [],
        b: 5,
        l: 10,
        s: false,
        n: 'mutiplication-table',
        d: 'outputs',
      })
    );
  });

  test('Should return configuration with custom values', async () => {
    const customValues = {
      b: 10,
      l: 20,
      s: true,
      n: 'Custom-table',
      d: 'Custom-outputs-2',
    };
    const argv = await runCommand(['-b', customValues.b.toString(), '-l', customValues.l.toString(), '-s', customValues.s.toString(), '-n', customValues.n, '-d', customValues.d]);

    expect(argv).toEqual(expect.objectContaining(customValues));
  });
});
