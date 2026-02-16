<script setup lang="ts">
import { computed } from 'vue';
import { Container } from '~/components/ui/container';
import { Button } from '~/components/ui/button';
import { useProducts } from '~/composables/useProducts';
import Product from './ProductsItem.vue';
import type { ProductsResponse } from '~~/shared/types/products';

interface Props {
    initialData: ProductsResponse;
    initialError?: Error | null;
}

const props = defineProps<Props>();

const { data, pending, error, hasMore, loadMore } = useProducts({
    initialPage: !props.initialError ? 2 : 1,
    initialTotal: props.initialData.total,
    initialTotalPages: props.initialData.totalPages,
});

const products = computed(() => {
    if (props.initialError) {
        return data.value;
    }
    return [...props.initialData.products, ...data.value];
});

const hasInitialError = computed(() => !!props.initialError);

const hasLoadMoreError = computed(() => !hasInitialError.value && !!error.value);

const showLoadMore = computed(() => 
    !hasInitialError.value && 
    products.value.length > 0 && 
    hasMore.value
);

const loadMoreButtonText = computed(() => 
    pending.value ? 'Загрузка...' : 'Показать ещё'
);

const refresh = () => {
    window.location.reload();
};
</script>

<template>
    <div class="products">

        <ul v-if="!hasInitialError" class="products__grid">
            <li v-for="product in products" :key="product.id">
                <Product :product="product" />
            </li>
        </ul>

        <div v-if="hasInitialError || hasLoadMoreError" class="products__error">
            <p>Произошла ошибка, попробуйте позже</p>
            <Button variant="outline" @click="hasInitialError ? refresh : loadMore">
                Повторить
            </Button>
        </div>

        <div v-else-if="showLoadMore" class="products__load-more">
            <Button
                variant="outline"
                :disabled="pending"
                @click="loadMore"
            >
                {{ loadMoreButtonText }}
            </Button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.products {
    padding-top: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 110px;

    &__grid {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 40px;
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    &__error {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        p {
            line-height: 40px;
        }
    }

    &__load-more {
        display: flex;
        justify-content: center;
    }
}


// Mobile
@media (max-width: 768px) {
    .products {
        padding-top: 40px;
        gap: 40px;

        &__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px;
        }
    }
}
</style>