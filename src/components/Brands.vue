<script setup>
import BrandTemplate from './templates/BrandTemplate.vue'
import hondaIcon from './brands/IconHonda.vue'
import yamahaIcon from './brands/IconYamaha.vue'
import airlinesIcon from './brands/IconAirlines.vue'
</script>

<template>
    <div class="brands">
        <BrandTemplate>
            <template #icon>
                <hondaIcon />
            </template>
            <template #heading>
                Design and engines, gear tech, auto parts, motors, our mechanics will make sure everything is in condition
                before start.
            </template>
        </BrandTemplate>
        <BrandTemplate>
            <template #icon>
                <yamahaIcon />
            </template>
            <template #heading>
                Sleek automotive parts, components, such as engines and bodies, but excluding tires, batteries, and fuel.
            </template>
        </BrandTemplate>
        <BrandTemplate>
            <template #icon>
                <airlinesIcon />
            </template>
            <template #heading>
                From new Chevy trucks and used cars for sale to certified auto service and more, we'll come and get your
                vehicle.
            </template>
        </BrandTemplate>
    </div>
</template>

<style lang="scss">
.brands {
    flex-wrap: wrap;
    padding: 200px 0;
    margin: var(--vt-border-gap);
    display: flex;
    border-bottom: solid 1px;

    @media screen and (max-width: 610px) {
        padding: 50px 0;
        row-gap: 30px;
    }
}
</style>