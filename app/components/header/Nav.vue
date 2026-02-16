<script setup lang="ts">
import { navItems } from './navItems';
</script>

<template>
    <nav class="nav">
        <ul class="nav__list">
            <li v-for="item in navItems" :key="item.label">
                <NuxtLink class="nav__item" :href="item.href">{{ item.label }}</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.nav {
    display: flex;
    align-items: center;
    background-color: var(--color-grey);
    padding: 0 24px;
    height: 40px;

    &__list {
        display: flex;
        align-items: center;
        gap: 40px;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    &__item {
        display: block;
        text-decoration: none;
        color: var(--color-black);
        font-size: 14px;
    }

    &__item:hover {
        color: var(--color-red);
    }
}
</style>