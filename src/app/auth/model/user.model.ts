export class User{
    id: number;
    username: string;
    role: string;
    name: string;
    password?: string;
  }

  export class UserDto{
    name: string;
    encodedCredentials: string;
    role: string;
    securityQuestion: string;
    securityAnswer: string;
  }

  export class UserEditDto{
    id?: number;
    name: string;
    securityQuestion: string;
    securityAnswer: string;
    username?: string;
  }