export default class InternalServerError extends Error {
  constructor() {
    super('internalServerError');
    this.name = 'internalServerError';
  }
}
