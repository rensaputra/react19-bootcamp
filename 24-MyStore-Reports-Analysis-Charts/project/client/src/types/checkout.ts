import type { Product } from "./product";

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
