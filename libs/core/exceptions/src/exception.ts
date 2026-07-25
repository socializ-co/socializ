export type ExceptionDetails = Record<string, unknown>;

export class SocializException extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly details?: ExceptionDetails,
  ) {
    super(message);
    this.name = 'SocializException';
  }
}
