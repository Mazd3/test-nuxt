<script setup lang="ts">
import { useAPI } from '~/composables/useApi';
import { useSeoMeta } from '#app';
import type { ProductsResponse } from '~~/shared/types/products';
import { Catalog } from '~/components/products';
import { Container } from '~/components/ui/container';

// SEO metadata
useSeoMeta({
    title: 'Каталог товаров',
});

const { data: initialData, error } = await useAPI<ProductsResponse>('/products', {
    query: { page: 1, limit: 20 },
});

const safeInitialData: ProductsResponse = initialData.value || {
    total: 0,   
    totalPages: 1,
    currentPage: 1,
    limit: 20,
    products: [],
};

const initialError = error.value;
</script>

<template>
    <Container class="catalog">
        <h1 class="catalog__title">Каталог</h1>
        <Catalog class="catalog__content" :initialData="safeInitialData" :initialError="initialError" />
    </Container>
</template>

<style lang="scss" scoped>
.catalog {
    padding-top: 100px;
    padding-bottom: 100px;

    &__title {
        font-size: 42px;
        text-align: center;
        text-transform: uppercase;
        font-weight: 500;
    }

    &__content {
        padding-top: 110px;
    }
}

@media (max-width: 768px) {
    .catalog {
        padding-top: 20px;
        padding-bottom: 40px;

        &__title {
            font-size: 24px;
        }
    }
}
</style>