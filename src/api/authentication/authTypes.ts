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
  name: string,
  surname: string,
  fatherName: string,
  age: number,
  studyDegree: TRACKS,
  cv?: File
}