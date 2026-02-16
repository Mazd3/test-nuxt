<script setup lang="ts">
type ContainerTag = 'div' | 'section' | 'main' | 'header' | 'footer' | 'nav' | 'article' | 'aside';

const props = withDefaults(
	defineProps<{
		as?: ContainerTag;
	}>(),
	{
		as: 'div',
	},
);

</script>

<template>
	<component :is="props.as" class="container">
		<slot />
	</component>
</template>

<style lang="scss" scoped>
.container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 var(--container-padding);

    @media (max-width: 768px) {
        padding: 0 var(--container-padding-mobile);
    }
}
</style>
