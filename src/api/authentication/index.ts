import {Requests} from '../service';
import {ApplyInputs, LoginInputs, RegistrationInputs} from './authTypes';

export class Authentication extends Requests {
  async register(data: RegistrationInputs) {
    const path = '/register';
    const result = await this.post(path, data);
    if (result) {
      // window.location.replace(ROUTES.LOGIN);
    }
  }

  async login(data: LoginInputs) {
    const path = '/auth';
    const result = await this.post(path, data);
    if (result && result.token) {
      sessionStorage.setItem('access_token', result.token);
      // window.location.replace(ROUTES.HOME);
    }
  }

  async logout() {
    const path = '/logout';
    await this.post(path, null);
  }

  async apply(data: ApplyInputs) {
    const path = '/apply';
    await this.post(path, data);
  }

  async uploadCv(data: File) {
    const path = '/cv';
    await this.post(path, data);
  }

  async getUsers(data: ApplyInputs) {
    const path = '/users';
    await this.get(path);
  }
}