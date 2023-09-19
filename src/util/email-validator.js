import validator from 'validator';
import MissingParamError from './error/missing-param-error';

export default class EmailValidator {
  isValid(email) {
    if (!email) {
      throw new MissingParamError('email');
    }
    return validator.isEmail(email);
  }
}
