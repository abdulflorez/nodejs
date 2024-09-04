import fs from 'fs';
import { SaveFile } from './save-file.use-case';
import { afterEach } from 'node:test';

describe('SaveFileUseCase', () => {
  const customOptions = {
    fileContent: 'Custom content',
    fileDestination: 'curstom-outputs/file-destination',
    fileName: 'Custom-table-name',
  };

  afterEach(() => {
    fs.rmSync('outputs', { recursive: true });
  });

  test('Should save file with default values', () => {
    const filePath = 'outputs/table.txt';
    const saveFile = new SaveFile();
    const options = {
      fileContent: 'test content',
    };

    const result = saveFile.execute(options);
    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });

    expect(result).toBe(true);
    expect(fileExists).toBe(true);
    expect(fileContent).toBe(options.fileContent);
  });

  test('should save file with custom values', () => {
    const filePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;

    const saveFile = new SaveFile();
    const result = saveFile.execute(customOptions);
    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });

    expect(result).toBe(true);
    expect(fileExists).toBe(true);
    expect(fileContent).toBe(customOptions.fileContent);
  });

  test('Should return false if directory could not be created', () => {
    const saveFile = new SaveFile();
    const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => {
      throw new Error('This is a custom message from testing');
    });

    const result = saveFile.execute(customOptions);
    expect(result).toBe(false);

    mkdirSpy.mockRestore();
  });

  test('Should return false if directory could not be created', () => {
    const saveFile = new SaveFile();
    const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => {
      throw new Error('This is a custom writing error error message');
    });

    const result = saveFile.execute({ fileContent: 'Hola' });
    expect(result).toBe(false);

    writeFileSpy.mockRestore();
  });
});
