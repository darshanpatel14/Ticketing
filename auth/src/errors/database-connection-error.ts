import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {

  reason = 'Error Connecting To Database';
  statusCode = 500;
  constructor() {
    super('Error Connecting To Database');

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeError() {
    return [{
      message: this.reason
    }]
  }
}