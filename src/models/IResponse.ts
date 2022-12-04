export interface responseJsonSignIn {
  id: string;
  email: string;
  username: string;
  password: string;
  invalidPassword: boolean;
  invalidUsername: boolean;
  message: string;
}

export interface responseJsonSignUp {
  id: string;
  email: string;
  username: string;
  password: string;
  message: string;
  status: boolean;
}
