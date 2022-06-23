import {Requests} from '../service';
import {ApplyInputs} from '../authentication/authTypes';

export enum USER_PROGRESS {
  CV_SCREENING,
  STEPIK_STUDENT,
  EASY_HIRE,
  INTERVIEW,
  ACCEPTED
}

export class User extends Requests {
  async getUsers() {
    const path = '/users';
    return  await this.get(path);
  }

  async deleteUser(id: string) {
    const path = '';
    await this.post(path, id);
  }

  async changeStatus(data) {
    const path = '/changeStatus';
    await this.post(path, data);
  }

  async getStatus() {
    const path = '/getStatus';
    return await this.get(path);
  }
}