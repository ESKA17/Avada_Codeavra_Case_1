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
    if (result) {
      console.log(result)
      sessionStorage.setItem('access_token', result);
      // window.location.replace(ROUTES.HOME);
    }
  }

  async logout() {
    const path = '/logout';
    await this.post(path, null);
  }

  async apply(data: ApplyInputs) {
    console.log('apply', data);
    const path = '/apply';
    await this.post(path, data);
  }

  async uploadCv(data: File) {
    const path = '/cv';
    await this.post(path, data);
  }
}