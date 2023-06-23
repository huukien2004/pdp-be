export interface ILoginResponse {
  accessToken: string;
}

export interface ICommonResponse {
  msg: string;
}

export interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  birthday: Date;
  email: string;
  phoneNumber: string;
  address: string;
  // classes: Array<ClassEntity>;
  createdAt: Date;
  updateAt: Date;
  deletedAt: Date;
}
