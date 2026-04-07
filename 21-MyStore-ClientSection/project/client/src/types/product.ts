export type ProductType = {
  id: number;
  name: string;
};

export type Product: Record<string, string| number| boolean| Date| ProductType> = {
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
