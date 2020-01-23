export interface ICreateUser {
  email: string;
  password: string;
  name: string;
  bio?: string;
}

export interface IUpdateUser {
  email?: string;
  password?: string;
  name?: string;
  bio?: string;
}

export interface ICredential {
  email: string,
  password: string
}
