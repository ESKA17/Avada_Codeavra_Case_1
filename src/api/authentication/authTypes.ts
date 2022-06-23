export interface LoginInputs {
  email: string,
  password: string,
}

export interface RegistrationInputs extends LoginInputs {
  passwordConfirm: string;
}

export enum TRACKS {
  FRONTEND,
  BACKEND,
  IOS,
  ANDROID,
  DEVOPS
}
export interface ApplyInputs {
  firstName: string,
  lastName: string,
  middleName: string,
  age: number,
  track: TRACKS,
  cv: File
}