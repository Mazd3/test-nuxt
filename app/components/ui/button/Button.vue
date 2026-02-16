<script setup lang="ts">
const props = withDefaults(defineProps<{
    variant?: 'primary' | 'outline';
}>(), {
    variant: 'primary',
});
</script>

<template>
    <button class="button" :class="`button--${props.variant}`">
        <slot />
    </button>
</template>

<style lang="scss" scoped>
.button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 40px;
    padding: 0 24px;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;

    &--primary {
        background-color: var(--color-red);
        color: var(--color-white);
    }
    &--outline {
        background-color: var(--color-white);
        color: var(--color-black);
        border: 1px solid var(--color-black);
    }
}
</style>