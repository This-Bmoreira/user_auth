import jwt from 'jsonwebtoken';
import MissingParamError from '../error/missing-param-error';

export default class TokenGenerator {
  constructor(secret) {
    this.secret = secret;
  }

  async generate(id) {
    if (!this.secret) {
      throw new MissingParamError('secret');
    }
    if (!id) {
      throw new MissingParamError('id');
    }
    return jwt.sign(id, this.secret);
  }
}
