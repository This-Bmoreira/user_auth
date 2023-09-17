import { jest } from '@jest/globals';
import validator from 'validator';
import EmailValidator from './email-validator';


describe('Email validator', () => {
  let sut; 

  beforeEach(() => {
    sut = new EmailValidator(); 
  });
  
  test('Should return true if validator return true', () => {
    const isEmailSpy = jest.spyOn(validator, 'isEmail');
    const isEmailValid = sut.isValid('valid_email@email.com');
    expect(isEmailSpy).toHaveBeenCalledWith('valid_email@email.com'); 
    expect(isEmailValid).toBe(true)
    isEmailSpy.mockRestore();
  })

  test('Should return false if validator return false', () => {
    const isEmailSpy = jest.spyOn(validator, 'isEmail').mockReturnValue(false);
    const isEmailValid = sut.isValid('invalid_email@email.com')
    expect(isEmailSpy).toHaveBeenCalledWith('invalid_email@email.com');
    expect(isEmailValid).toBe(false);
    isEmailSpy.mockRestore();
  })
})