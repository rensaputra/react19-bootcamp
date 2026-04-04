export interface User {
  id: number;
  userName: string;
  userType: string;
  password: string;
}

export type UserWithoutPassword = Omit<User, "password">;
