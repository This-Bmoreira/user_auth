import bcrypt from 'bcrypt';
import MissingParamError from '../../../util/error/missing-param-error';

export default class Encrypter {
  async compare(value, hash) {
    if (!value) {
      throw new MissingParamError('value');
    }
    if (!hash) {
      throw new MissingParamError('hash');
    }
    const isValid = await bcrypt.compare(value, hash);
    return isValid;
  }
}
