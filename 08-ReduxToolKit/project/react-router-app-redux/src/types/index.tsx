export interface Product {
  id: string;
  image: string;
  name: string;
  price: number;
  description: string;
}

export interface ProductState {
  products: Product[];
}