import MissingParamError from '../../util/error/missing-param-error';

export default class AuthUseCase {
  constructor({
    loadUserByEmailRepository, updateAccessTokenRepository, encrypter, tokenGenerator,
  } = {}) {
    this.updateAccessTokenRepository = updateAccessTokenRepository;
    this.loadUserByEmailRepository = loadUserByEmailRepository;
    this.encrypter = encrypter;
    this.tokenGenerator = tokenGenerator;
  }

  async auth(email, password) {
    if (!email) {
      throw new MissingParamError('email');
    }
    if (!password) {
      throw new MissingParamError('password');
    }
    const user = await this.loadUserByEmailRepository.load(email);
    const isValid = user && await this.encrypter.compare(password, user.password);
    if (isValid) {
      const accessToken = await this.tokenGenerator.generate(user.id);
      await this.updateAccessTokenRepository.update(user.id, accessToken);
      return accessToken;
    }
    return null;
  }
}
