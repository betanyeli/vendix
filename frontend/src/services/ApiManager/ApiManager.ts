import { Product } from "./ApiManager.types";
const BASE_URL = "https://vendix-api.vercel.app";

const ApiManager = {
  async getAllProducts(): Promise<Product[]> {
    try {
      const response = await fetch(`${BASE_URL}/products`, { mode: "no-cors" });
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  async getProductById(id: number): Promise<Product> {
    try {
      const response = await fetch(`${BASE_URL}/products/${id}`, {
        mode: "no-cors",
      });
      if (!response.ok) {
        throw new Error(`Product with ID ${id} not found`);
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  async createProduct(productData: Partial<Product>): Promise<Product> {
    try {
      const response = await fetch(`${BASE_URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });
      if (!response.ok) {
        throw new Error("Failed to create a new product");
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  async updateProductById(
    id: number,
    productData: Partial<Product>
  ): Promise<Product> {
    try {
      const response = await fetch(`${BASE_URL}/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });
      if (!response.ok) {
        throw new Error(`Product with ID ${id} not found`);
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  async deleteProductById(id: number): Promise<Product> {
    try {
      const response = await fetch(`${BASE_URL}/products/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`Product with ID ${id} not found`);
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  },
};

export default ApiManager;
