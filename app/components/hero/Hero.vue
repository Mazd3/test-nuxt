<script setup lang="ts">
import { Container } from '~/components/ui/container';
import { Button } from '../ui/button';
import { navigateTo } from '#app';
</script>

<template>
    <Container as="header" class="hero">
        <h1 class="hero__title">ТЕСТОВОЕ ЗАДАНИЕ</h1>
        <Button @click="navigateTo('/catalog')">В каталог</Button>
    </Container>
</template>

<style lang="scss" scoped>
.hero {
    height: var(--hero-height);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;

    &__title {
        font-size: 64px;
        font-weight: 500;
        color: var(--color-black);
    }
}

@media (max-width: 768px) {
    .hero {
        &__title {
            width: 220px;
            font-size: 26px;
        }
    }
}
</style>