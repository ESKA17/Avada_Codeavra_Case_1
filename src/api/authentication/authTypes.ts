export interface LoginInputs {
  email: string,
  password: string,
}

export interface RegistrationInputs extends LoginInputs {
  passwordConfirm: string;
}