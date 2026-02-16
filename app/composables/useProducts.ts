import { ref } from 'vue';
import { useNuxtApp } from '#app';
import type { Product, ProductsResponse } from '~~/shared/types/products';

interface UseProductsOptions {
    initialPage: number;
    initialTotal?: number;
    initialTotalPages?: number;
}

export const useProducts = ({ initialPage, initialTotal = 0, initialTotalPages = 1 }: UseProductsOptions) => {
    const { $api } = useNuxtApp();

    const currentPage = ref(initialPage - 1);
    const totalPages = ref(initialTotalPages);
    const total = ref(initialTotal);
    const data = ref<Product[]>([]);
    const pending = ref(false);
    const error = ref<Error | null>(null);
    const hasMore = ref(initialPage <= initialTotalPages);
    
    const loadMore = async () => {
        if (!hasMore.value || pending.value) {
            return;
        }

        try {
            pending.value = true;
            error.value = null;
            
            const nextPage = currentPage.value + 1;
            const response = await $api<ProductsResponse>('/products', { 
                query: { 
                    page: nextPage, 
                    limit: 20 
                } 
            });
            
            data.value = [...data.value, ...response.products];
            currentPage.value = nextPage;
            totalPages.value = response.totalPages;
            total.value = response.total;
            hasMore.value = currentPage.value < response.totalPages;
        } catch (err) {
            error.value = err instanceof Error ? err : new Error(String(err));
        } finally {
            pending.value = false;
        }
    };

    const reset = () => {
        currentPage.value = initialPage - 1;
        data.value = [];
        error.value = null;
        pending.value = false;
        hasMore.value = initialPage <= totalPages.value;
    };

    return {
        data,
        pending,
        hasMore,
        error,
        loadMore,
        reset,
        currentPage,
        totalPages,
        total,
    };
};
