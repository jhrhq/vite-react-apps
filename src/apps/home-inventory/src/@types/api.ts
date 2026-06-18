export type ErrorPayload =
  | {
      field?: string;
      message: string;
    }[]
  // biome-ignore lint/suspicious/noExplicitAny: false alert
  | Record<string, any>;

export class AppError extends Error {
  public readonly status: number;
  public readonly code?: string;
  public readonly payload?: ErrorPayload;

  constructor(
    message: string,
    status: number = 500,
    code?: string,
    payload?: ErrorPayload,
  ) {
    super(message);
    this.name = "AppError";
    this.status = status;
    this.code = code;
    this.payload = payload;

    // Fix for built-in objects when transpiling to ES5
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

// Inside your query-client.ts
declare module "@tanstack/react-query" {
  interface Register {
    defaultError: AppError;
  }
}
