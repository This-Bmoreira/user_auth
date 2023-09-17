import InvalidParamError from '../../util/error/invalid-param-error';
import MissingParamError from '../../util/error/missing-param-error';
import HttpResponse from '../helper/http-utility/http-response';

export default class LoginRouter {
  constructor(authUseCase, emailValidator) {
    this.authUseCase = authUseCase;
    this.emailValidator = emailValidator;
  }

  async route(httpRequest) {
    try {
      const { email, password } = httpRequest.body;
      if (!email) {
        return HttpResponse.badRequest(new MissingParamError('email'));
      }
      if (!this.emailValidator.isValid(email)) {
        return HttpResponse.badRequest(new InvalidParamError('email'));
      }
      if (!password) {
        return HttpResponse.badRequest(new MissingParamError('password'));
      }
      const accessToken = await this.authUseCase.auth(email, password);
      if (!accessToken) {
        return HttpResponse.unauthorized();
      }
      return HttpResponse.ok({ accessToken });
    } catch (error) {
      return HttpResponse.internalServerError();
    }
  }
}
