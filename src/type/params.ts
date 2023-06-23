export interface IRegisterParams {
  firstname: string;

  lastname: string;

  email: string;

  password: string;

  birthday: Date;

  phoneNumber: number;

  address: string;
}

export interface ILoginParams {
  username: string;
  password: string;
}

export interface IChangePasswordParams {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface IEditProfileParams {
  firstname: string;
  lastname: string;
  birthday: Date;
  phoneNumber: string;
  address: string;
}
