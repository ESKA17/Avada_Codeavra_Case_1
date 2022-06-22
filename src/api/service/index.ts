import {ROUTES} from '../../types/enums';

export interface RequestConfig {
  method?: string;
  body?: string | URLSearchParams;
  headers?: Headers;
}

const BASE_URL = ''; // TODO add url

export class Requests {
  baseUrl: string;

  constructor() {
    this.baseUrl = BASE_URL;
  }

  async get(path: string) {
    const url = this.baseUrl + path;
    return await this.#makeRequest(url);
  }

  async post<T>(path: string, data: T) {
    const url = this.baseUrl + path;
    const headers = new Headers({'Content-Type': 'application/json'});
    const config = {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    };
    return await this.#makeRequest(url, config);
  }

  async postUrlEncoded(path: string, data: Record<string, string>) {
    const url = this.baseUrl + path;
    const contentType = {'Content-Type': 'application/x-www-form-urlencoded'};
    const headers = new Headers(contentType);
    const config = {
      method: 'POST',
      headers,
      body: new URLSearchParams(data),
    };
    return await this.#makeRequest(url, config);
  }

  async put<T>(path: string, data: T) {
    const url = this.baseUrl + path;
    const headers = new Headers({'Content-Type': 'application/json'});
    const config = {
      method: 'PUT',
      headers,
      body: JSON.stringify(data),
    };
    return await this.#makeRequest(url, config);
  }

  async #makeRequest(url: string, config: RequestConfig = {}) {
    try {
      const response = await fetch(url, config);
      if (response.ok) return response.json();
      else if (response.status === 401 || response.status === 403) {
        window.location.replace(ROUTES.LOGIN);
      } else alert(response.statusText);
    } catch (e) {
      console.log(e);
      window.location.replace(ROUTES.ERROR_500);
    }
  }
}