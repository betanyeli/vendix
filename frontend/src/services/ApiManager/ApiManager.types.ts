/**
 * Creates a new Product instance.
 *
 * @param {number} id - The product ID.
 * @param {string} productName - The name of the product.
 * @param {number} sellerId - The ID of the seller.
 * @param {number} amountAvailable - The available amount.
 * @param {number} cost - The cost of the product.
 * @param {number} stock - The stock count.
 * @param {Date} createdAt - The creation date.
 */

export interface Product {
  id: number;
  productName: string;
  sellerId: string;
  amountAvailable: number;
  cost: number;
  createdAt: Date;
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
