export interface IUserLogin {
  email: string;
  password: string;
}

export default interface IUsers extends IUserLogin {
  id?: number;
  username: string;
  role: string;
}
