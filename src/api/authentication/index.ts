import {Requests} from '../service';
import {ROUTES} from '../../types/enums';
import {LoginInputs, RegistrationInputs} from './authTypes';

export class Authentication extends Requests {
  async register(data: RegistrationInputs) {
    const path = '/register'; // todo add path
    const result = await this.post(path, data);
    if (result) {
      // window.location.replace(ROUTES.LOGIN);
    }
  }

  async login(data: LoginInputs) {
    const path = '/auth'; // todo add path
    const result = await this.post(path, data);
    if (result) {
      console.log(result)
      // window.location.replace(ROUTES.PROFILE);
    }
  }

  async logout() {
    const path = '/logout'; // todo add path
    await this.post(path, null);
  }
}