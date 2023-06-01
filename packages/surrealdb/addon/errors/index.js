export {
  NoActiveSocket,
  NoConnectionDetails,
  UnexpectedResponse,
  InvalidURLProvided,
} from 'surrealdb.js/errors';

export class DestroyedError extends Error {
  constructor() {
    super();
    this.name = 'DestroyedError';
  }
}

export default {
  DestroyedError: DestroyedError,
};
