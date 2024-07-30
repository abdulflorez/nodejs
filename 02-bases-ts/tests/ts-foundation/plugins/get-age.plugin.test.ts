import { getAge } from '../../../src/plugins';

describe('plugins/get-age.plugin.ts', () => {
  test('getAge() should return a number', () => {
    const birthday = '1985-10-21';
    const age = getAge(birthday);

    expect(typeof age).toBe('number');
  });

  test('getAge() should return a number', () => {
    const birthday = '1985-10-21';
    const age = getAge(birthday);

    const calculate = new Date().getFullYear() - new Date(birthday).getFullYear();

    expect(age).toBe(calculate);
  });

  test('getAge should return 0 years', () => {
    //This allow us overwrite how works our internal methods, what it returns, and more
    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1998);

    const birthday = '1985-10-21';
    const age = getAge(birthday);

    expect(age).toBe(0);
  });
});
