export interface requersJsonSignIn {
  username: string;
  password: string;
}

export interface requestJsonSignUp {
  email: string;
  username: string;
  password: string;
}

export interface requestJsonCreateNewGroup {
  userId: string;
  nameGroup: string;
}

export interface requersJsonRenameGroup {
  newGroupName: string;
  id: string | number;
}
