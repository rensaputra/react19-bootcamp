import { Product } from "./product";

export type ApiResponse<T> = {
  message: string;
  data: T;
};

export interface PaymentStatusSession {
  address: string;
  city: string;
  customerId: string;
  customerEmail: string;
  SODateTime: number;
  grandTotalPrice: number;
  paymentMode: string;
  products: Product[];
}
