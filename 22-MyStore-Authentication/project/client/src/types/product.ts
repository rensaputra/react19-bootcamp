export type ProductType = {
  id: number;
  name: string;
};

export type Product = {
  id: number;
  name: string;
  description: string;
  mrp: number;
  sellPrice: number;
  image: string;
  productTypeId: number;
  currentStock: number;
  rating: number | null;
  smallSize: number;
  mediumSize: number;
  largeSize: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  productType: ProductType;
};

export type ProductSize = "smallSize" | "mediumSize" | "largeSize";

export type ProductInCart = Product & {
  quantity: number;
  size: ProductSize;
};
