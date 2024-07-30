import { httpClientPlugin } from '../../../src/plugins/http-client.plugin';

describe('plugins/http-client.plugin.ts', () => {
  test('httpClientPlugin.get() should return a string', async () => {
    const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1');
    expect(data).toEqual({
      userId: expect.any(Number),
      id: expect.any(Number),
      title: expect.any(String),
      completed: expect.any(Boolean),
    });
  });

  test('httpClientPlugin.get() should return a string', async () => {
    expect(typeof httpClientPlugin.post).toBe('function');
    expect(typeof httpClientPlugin.put).toBe('function');
    expect(typeof httpClientPlugin.delete).toBe('function');
  });
});
