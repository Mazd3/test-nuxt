<script setup lang="ts">
import { Header } from '~/components/header';
import { Footer } from '~/components/footer';
</script>

<template>
    <Header />
    <main>
        <slot />
    </main>
    <Footer />
</template>