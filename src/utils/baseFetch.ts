const DEFAULT_URL = `http://${window.location.hostname}:3030/api/`; //FIXME: create prod version of DEFAULT_URL when it is needed

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

export async function apiRequest<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
  let response: Response;
  try {
    const url = new URL(input.toString(), DEFAULT_URL);
    response = await fetch(url.toString(), {
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
}
