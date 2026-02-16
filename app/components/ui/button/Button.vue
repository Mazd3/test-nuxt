<script setup lang="ts">
const props = withDefaults(defineProps<{
    variant?: 'primary' | 'outline' | 'ghost';
    square?: boolean;
}>(), {
    variant: 'primary',
    square: false,
});
</script>

<template>
    <button 
        class="button" 
        :class="[
            `button--${props.variant}`,
            { 'button--square': props.square }
        ]"
    >
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

    // VARIANTS

    &--primary {
        background-color: var(--color-red);
        color: var(--color-white);
    }

    &--outline {
        background-color: var(--color-white);
        color: var(--color-black);
        border: 1px solid var(--color-black);
    }

    &--ghost {
        background-color: var(--color-grey);
        color: var(--color-black);
        border: none;
    }

    // SQUARE

    &--square {
        padding: 0;
        aspect-ratio: 1/1;
    }
}
</style>