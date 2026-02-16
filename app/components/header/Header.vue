<script setup lang="ts">
import Nav from './Nav.vue';
import { Button } from '~/components/ui/button';
import { Container } from '~/components/ui/container';
import MenuIcon from '~/assets/icons/menu.svg';
</script>

<template>
	<Container as="header" class="header">
		<div class="header__left">
            <NuxtLink to="/" class="header__logo-link">
                <div class="header__logo" />
            </NuxtLink>
        </div>

        <div class="header__center">
		    <Nav class="header__nav" />
        </div>

        <div class="header__right">
            <Button square variant="ghost">
                <img :src="MenuIcon" alt="logo">
            </Button>
        </div>
	</Container>
</template>

<style lang="scss" scoped>
.header {
	display: grid;
	grid-template-columns: 1fr auto 1fr;
    align-items: center;
	height: var(--header-height);

    &__left {
        justify-self: start;
    }

    &__center {
        justify-self: center;
    }

    &__right {
        justify-self: end;
    }

    &__logo {
        width: 42px;
        height: 42px;
        background-color: var(--color-red);
    }
}

@media (max-width: 768px) {
	.header {
        &__logo {
            width: 28px;
            height: 28px;
        }

        &__nav {
            display: none;
        }
    }
}
</style>
