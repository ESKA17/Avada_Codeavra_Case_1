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
      sessionStorage.setItem('access_token', result);
      console.log(result);
      console.log(sessionStorage.getItem('access_token'));
      // window.location.replace(ROUTES.HOME);
    }
  }

  async logout() {
    const path = '/logout';
    sessionStorage.removeItem('access_token');
    await this.post(path, null);
  }

  async sendScreeningData(data: ApplyInputs) {
    const path = '/screening';
    await this.post(path, data);
    localStorage.setItem('isApplied', '');
  }

  async getScreeningData() {
    const path = '/screening';
    return await this.get(path);
  }
  async getAll() {
    const path = '/screening/all';
    return await this.get(path);
  }

  async uploadCv(data: FormData) {
    const path = '/upload';
    await this.postFile(path, data);
  }

  async getCVs() {
    const path = '/files';
    await this.get(path);
  }

  async getCV(fileName: string) {
    const path = `/file/${fileName}`;
    await this.get(path);
  }
}