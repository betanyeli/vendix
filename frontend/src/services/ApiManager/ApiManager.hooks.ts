import { useState, useEffect } from "react";
import ApiManager from "./ApiManager";
import { ApiManagerHook, Product } from "./ApiManager.types";

function useApiManager(): ApiManagerHook {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    ApiManager.getAllProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);

  const createProduct = async (
    productData: Partial<Product>
  ): Promise<void> => {
    try {
      const newProduct = await ApiManager.createProduct(productData);
      setProducts([...products, newProduct]);
    } catch (error) {
      setError(
        error instanceof Error
          ? error
          : new Error("An error occurred creating a product")
      );
    }
  };

  const updateProduct = async (
    productId: number,
    productData: Partial<Product>
  ): Promise<void> => {
    try {
      const updatedProduct = await ApiManager.updateProductById(
        productId,
        productData
      );
      const updatedProducts = products.map((product) =>
        product.id === productId ? updatedProduct : product
      );
      setProducts(updatedProducts);
    } catch (error) {
      setError(
        error instanceof Error
          ? error
          : new Error("An error occurred uopdating a product")
      );
    }
  };

  const deleteProduct = async (productId: number): Promise<void> => {
    try {
      await ApiManager.deleteProductById(productId);
      const updatedProducts = products.filter(
        (product) => product.id !== productId
      );
      setProducts(updatedProducts);
    } catch (error) {
      setError(
        error instanceof Error
          ? error
          : new Error("An error occurred deleting a product")
      );
    }
  };

  const getProductById = async (productId: number): Promise<Product | null> => {
    try {
      const product = await ApiManager.getProductById(productId);
      return product || null;
    } catch (error) {
      setError(error instanceof Error ? error : new Error("An error occurred"));
      return null;
    }
  };

  return {
    products,
    loading,
    error,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById,
  };
}

export default useApiManager;
