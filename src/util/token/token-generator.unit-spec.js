import { jest } from '@jest/globals';
import jwt from "jsonwebtoken";
import  TokenGenerator  from './token-generator';

describe('Token Generator', () => {
  let sut;

  beforeEach(() => {
    sut = new TokenGenerator('secret');
  });

  test('Should return null if JWT returns null', async () => {
    jest.spyOn(jwt, 'sign').mockReturnValueOnce(null);
    const token = await sut.generate('some_id');
    expect(token).toBeNull();
    expect(jwt.sign).toHaveBeenCalledWith('some_id', 'secret');
  });
  test('Should return a token if JWT returns token', async () => {
    jest.spyOn(jwt, 'sign').mockReturnValueOnce('generated_token');
    const token = await sut.generate('some_id');
    expect(token).toBe('generated_token');
    expect(jwt.sign).toHaveBeenCalledWith('some_id', 'secret');
  });

  test('Should throw error if no id is provided', async () => {
    const expectedErrorMessage = 'Missing param: id';
    const promise = sut.generate();
    await expect(promise).rejects.toThrow(expectedErrorMessage);
  });
  describe('Dependency injection secret', () => {
    test('Should throw error if no secret is provided', async () => {
      const expectedErrorMessage = 'Missing param: secret';
      const sut = new TokenGenerator();
      const promise = sut.generate('some_id');
      await expect(promise).rejects.toThrow(expectedErrorMessage);
    });
  })
});
