import { jest } from '@jest/globals';
import bcrypt from "bcrypt";
import  Encrypter  from './Encrypter';
import MissingParamError from '../../../util/error/missing-param-error'

describe('Encrypter', () => {
  let sut;

  beforeEach(() => {
    sut = new Encrypter();
  });
  test('Should return true if bcrypt return true', async () => {
    jest.spyOn(bcrypt, 'compare').mockReturnValue(true);
    const isValid = await sut.compare('any_value', 'hashed_value');
    expect(isValid).toBe(true);
  });

  test('Should return false if bcrypt return true', async () => {
    jest.spyOn(bcrypt, 'compare').mockReturnValue(false);
    const isValid = await sut.compare('any_value', 'hashed_value');
    expect(isValid).toBe(false);
  });

  test('Should call bcrypt with correct values', async () => {
    const compareSpy = jest.spyOn(bcrypt, 'compare');
    await sut.compare('any_value', 'hashed_value');
    expect(compareSpy).toHaveBeenCalledWith('any_value', 'hashed_value');
  });

  test('Should throw MissingParamError if value is not provided', async () => {
    const expectedErrorMessage = 'Missing param: value';

    await expect(sut.compare()).rejects.toThrow(MissingParamError);
    await expect(sut.compare()).rejects.toThrow(expectedErrorMessage);
  });

  test('Should throw MissingParamError if hash is not provided', async () => {
    const expectedErrorMessage = 'Missing param: hash';

    await expect(sut.compare('any_value')).rejects.toThrow(MissingParamError);
    await expect(sut.compare('any_value')).rejects.toThrow(expectedErrorMessage);
  });

  test('Should not throw if both value and hash are provided', async () => {
    await expect(sut.compare('any_value', 'any_hash')).resolves.not.toThrow();
  });
});
