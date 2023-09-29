export interface UserApi {
  id: number;
  username: string;
  email: string;
  password: string;
  roles: string[];
}
export interface UserSend {
  username: string;
  email: string;
  password: string;
}
export interface LoginUser {
  username: string;
  password: string;
}
