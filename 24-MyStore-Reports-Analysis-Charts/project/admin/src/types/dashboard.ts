export interface DashboardData {
  totalBuyers: number;
  totalCustomers: number;
  totalRevenue: string;
  recentOrders: SalesMaster[];
  revenueByDate: any[];
  customerCreatedByDate: any[];
}

export interface SalesMaster {
  id: string;
  bId: number;
  SODateTime: Date;
  grandTotalPrice: number;
  paymentMode: string;
  buyer?: {
    password: string;
    id: number;
    customerName: string;
    email: string;
    address: string;
    city: string;
    createdAt: Date;
  };
  salesTransactions?: SalesTransaction[];
}

export interface SalesTransaction {
  id: string;
  SMOId: string;
  productId: number;
  unitPrice: number;
  qtyPurchased: number;
  total: number;
  product?: Product;
}

export interface Product {
  id: number;
  name: string;
  description: string;
}
