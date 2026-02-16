import type { ProductsResponse } from '../types/products';

interface FetchProductsOptions {
    page?: number;
    limit?: number;
}

export const fetchProducts = ({ page = 1, limit = 20 }: FetchProductsOptions = {}) => {
    return $fetch<ProductsResponse>('/products', { 
        query: { page, limit } 
    });
};
