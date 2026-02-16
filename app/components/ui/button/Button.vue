<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    variant?: 'primary' | 'outline' | 'ghost';
    square?: boolean;
    as?: string;
}>(), {
    variant: 'primary',
    square: false,
    as: 'button',
});

const buttonClasses = computed(() => [
    `button--${props.variant}`,
    { 'button--square': props.square },
]);
</script>

<template>
    <component
        :is="props.as"
        class="button"
        :class="buttonClasses"
    >
        <slot />
    </component>
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
    border: none;
    text-decoration: none;

    // VARIANTS

    &--primary {
        background-color: var(--color-red);
        color: var(--color-white);
    }

    &--outline {
        background-color: var(--color-white);
        color: var(--color-black);
        border: 1px solid var(--color-black);

        &:disabled {
            border: none;
            opacity: 1;
        }
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