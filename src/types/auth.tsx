export interface AuthRoles {
  tutor: boolean;
  student: boolean;
}

export interface AuthData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}