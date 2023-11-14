// const DEFAULT_URL = "https://api.themoviedb.org/3";

class ApiError extends Error {
  private readonly _response: Response;

  constructor(response: Response) {
    super();
    Object.setPrototypeOf(this, ApiError.prototype);
    this.name = this.constructor.name;
    this._response = response;
  }

  public get response() {
    return this._response;
  }

  public get json() {
    return {
      url: this._response.url,
      status: this._response.status,
      text: this._response.statusText,
    };
  }

  public get message() {
    return `Request to: '${this._response.url}' is failed with status: '${this._response.status}' and message: '${this._response.statusText}'`;
  }
}

class FetchError extends Error {
  private readonly _original: unknown;

  constructor(original: unknown) {
    super();
    Object.setPrototypeOf(this, FetchError.prototype);
    this.name = this.constructor.name;
    this._original = original;
  }

  public get original() {
    return this._original;
  }
}

export const apiRequest = async (input: RequestInfo, init?: RequestInit) => {
  let response: Response;
  try {
    response = await fetch(input, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      redirect: "error",
      ...init,
    });
  } catch (error) {
    throw new FetchError(error);
  }

  if (response.ok) return response.json();
  throw new ApiError(response);
};
