<script setup lang="ts">
import { Container } from '~/components/ui/container';
import { footerItems } from './footerItems';
</script>

<template>
    <div class="footer__wrapper">
        <Container as="footer" class="footer">
            <div class="footer__content" v-for="item in footerItems" :key="item.label">
                <h3 class="footer__title">{{ item.label }}</h3>
                <ul class="footer__list">
                    <li class="footer__item" v-for="subItem in item.items" :key="subItem.label">
                        <NuxtLink class="footer__link" :href="subItem.href">{{ subItem.label }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </Container>
    </div> 
</template>

<style lang="scss" scoped>
.footer {
    &__wrapper {
        background-color: var(--color-black);
        padding: 100px 0;
    }

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    font-size: 14px;

    &__title {
        font-size: 14px;
        font-weight: 500;
        color: var(--color-dark);
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 14px;
        list-style: none;
        margin: 0;
        padding: 0;
        padding-top: 14px;
    }

    &__item {
        display: block;
        margin: 0;
        padding: 0;
    }

    &__link {
        text-decoration: none;
        color: var(--color-white);

        &:hover {
            color: var(--color-red);
        }
    }
}
</style>