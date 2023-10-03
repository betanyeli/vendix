export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface ApiManagerHook {
  products: Product[];
  loading: boolean;
  error: Error | null;
  createProduct: (productData: Partial<Product>) => Promise<void>;
  updateProduct: (
    productId: number,
    productData: Partial<Product>
  ) => Promise<void>;
  deleteProduct: (productId: number) => Promise<void>;
  getProductById: (productId: number) => Promise<Product | null>;
}
