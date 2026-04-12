export interface User {
  id: number;
  userName: string;
  userType: string;
  password: string;
}

export type UserWithoutPassword = Omit<User, "password">;

export interface Buyer {
  id: number;
  customerName: string;
  email: string;
  password: string;
  address: string;
  city: string;
  createdAt: Date;
}

export type BuyerWithoutPassword = Omit<Buyer, "password">;
