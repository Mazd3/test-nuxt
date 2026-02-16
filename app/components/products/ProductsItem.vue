<script setup lang="ts">
import type { Product } from '~~/shared/types/products';
import { formatPrice } from '~/utils/formatPrice';
import { halfPrice } from '~/utils/halfPrice';
import HeartIcon from '~/assets/icons/heart.svg';

const props = defineProps<{
    product: Product;
}>();
</script>

<template>
    <article class="product">
        <img class="product__image" :src="props.product.image" :alt="props.product.name" loading="lazy">
        <div class="product__price">
            <span class="product__price-current">{{ formatPrice(props.product.price) }}</span>
            <span class="product__price-discount">{{ halfPrice(props.product.price) }} × 2</span>
        </div>
        
        <h2 class="product__name">{{ props.product.name }}</h2>

        <button class="product__like">
            <img class="product__heart" :src="HeartIcon" alt="heart">
        </button>
    </article>
</template>

<style lang="scss" scoped>
.product {
    position: relative;
    display: flex;
    flex-direction: column;

    &__image {
        width: 100%;
        aspect-ratio: 290 / 180;
        object-fit: cover;
    }

    &__price {
        margin-top: 30px;
        display: flex;
        align-items: flex-start;
        gap: 10px;
    }

    &__price-current {
        line-height: 17px;
        height: 17px;
        font-size: 24px;
        font-weight: 500;
    }

    &__price-discount {
        font-size: 14px;
        line-height: 10px;
        height: 18px;
        font-weight: 500;
        background-color: var(--color-black);
        color: var(--color-white);
        padding: 4px;
        letter-spacing: -0.05em;
    }

    &__name {
        margin-top: 6px;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    &__like {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 24px;
        height: 24px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
    }
}

@media (max-width: 768px) {
    .product {
        &__price {
            flex-direction: column;
        }

        &__name {
            line-height: 18px;
            font-size: 12px;
            margin-top: 4px;
        }
    }
}
</style>
