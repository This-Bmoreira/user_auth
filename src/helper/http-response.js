import InternalServerError from './internal-server-error';
import Unauthorized from './unauthorized-error';

export default class HttpResponse {
  static continue() {
    return {
      statusCode: 100,
    };
  }

  static switchingProtocols() {
    return {
      statusCode: 101,
    };
  }

  static processing() {
    return {
      statusCode: 102,
    };
  }

  static earlyHints() {
    return {
      statusCode: 103,
    };
  }

  static ok(data) {
    return {
      statusCode: 200,
      body: data,
    };
  }

  static created() {
    return {
      statusCode: 201,
    };
  }

  static accepted() {
    return {
      statusCode: 202,
    };
  }

  static nonAuthoritativeInformation() {
    return {
      statusCode: 203,
    };
  }

  static noContent() {
    return {
      statusCode: 204,
    };
  }

  static resetContent() {
    return {
      statusCode: 205,
    };
  }

  static partialContent() {
    return {
      statusCode: 206,
    };
  }

  static ambiguous() {
    return {
      statusCode: 300,
    };
  }

  static movedPermanently() {
    return {
      statusCode: 301,
    };
  }

  static found() {
    return {
      statusCode: 302,
    };
  }

  static seeOther() {
    return {
      statusCode: 303,
    };
  }

  static notModified() {
    return {
      statusCode: 304,
    };
  }

  static temporaryRedirect() {
    return {
      statusCode: 307,
    };
  }

  static permanentRedirect() {
    return {
      statusCode: 308,
    };
  }

  static badRequest(error) {
    return {
      statusCode: 400,
      body: error,
    };
  }

  static unauthorized() {
    return {
      statusCode: 401,
      body: new Unauthorized(),
    };
  }

  static paymentRequired() {
    return {
      statusCode: 402,
    };
  }

  static forbidden() {
    return {
      statusCode: 403,
    };
  }

  static notFound() {
    return {
      statusCode: 404,
    };
  }

  static methodNotAllowed() {
    return {
      statusCode: 405,
    };
  }

  static notAcceptable() {
    return {
      statusCode: 406,
    };
  }

  static proxyAuthenticationRequired() {
    return {
      statusCode: 407,
    };
  }

  static requestTimeout() {
    return {
      statusCode: 408,
    };
  }

  static conflict() {
    return {
      statusCode: 409,
    };
  }

  static gone() {
    return {
      statusCode: 410,
    };
  }

  static lengthRequired() {
    return {
      statusCode: 411,
    };
  }

  static preconditionFailed() {
    return {
      statusCode: 412,
    };
  }

  static payloadTooLarge() {
    return {
      statusCode: 413,
    };
  }

  static uriTooLong() {
    return {
      statusCode: 414,
    };
  }

  static unsupportedMediaType() {
    return {
      statusCode: 415,
    };
  }

  static requestedRangeNotSatisfiable() {
    return {
      statusCode: 416,
    };
  }

  static expectationFailed() {
    return {
      statusCode: 417,
    };
  }

  static iAmATeapot() {
    return {
      statusCode: 418,
    };
  }

  static misdirected() {
    return {
      statusCode: 421,
    };
  }

  static unprocessableEntity() {
    return {
      statusCode: 422,
    };
  }

  static failedDependency() {
    return {
      statusCode: 424,
    };
  }

  static preconditionRequired() {
    return {
      statusCode: 428,
    };
  }

  static tooManyRequests() {
    return {
      statusCode: 429,
    };
  }

  static internalServerError() {
    return {
      statusCode: 500,
      body: new InternalServerError(),
    };
  }

  static notImplemented() {
    return {
      statusCode: 501,
    };
  }

  static badGateway() {
    return {
      statusCode: 502,
    };
  }

  static serviceUnavailable() {
    return {
      statusCode: 503,
    };
  }

  static gatewayTimeout() {
    return {
      statusCode: 504,
    };
  }

  static httpVersionNotSupported() {
    return {
      statusCode: 505,
    };
  }
}
