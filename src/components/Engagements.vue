<script setup>
import Engagement from './templates/Engagement.vue'
</script>

<template>
    <h2>FEATURED ENGAGEMENTS</h2>
    <div class="sliders">
        <Splide :options="{
            type: 'slide',
            perPage: 3,
            arrows: false,
            drag: 'free',
            rewindByDrag: false,
            gap: '50px',
            padding: '5%',
            pagination: false,
        }" aria-label="My Favorite Images">
            <Engagement>
                <template #logo>LOGO</template>
                <template #header>HEADER</template>
                <template #info> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestiae officiis veritatis
                    aliquid consectetur, aliquam voluptatibus quidem nesciunt labore molestias quis enim rerum expedita
                    distinctio quos dicta quia reiciendis velit?</template>
            </Engagement>
            <Engagement>
                <template #logo>LOGO</template>
                <template #header>HEADER</template>
                <template #info> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestiae officiis veritatis
                    aliquid consectetur, aliquam voluptatibus quidem nesciunt labore molestias quis enim rerum expedita
                    distinctio quos dicta quia reiciendis velit?</template>
            </Engagement>
            <Engagement>
                <template #logo>LOGO</template>
                <template #header>HEADER</template>
                <template #info> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestiae officiis veritatis
                    aliquid consectetur, aliquam voluptatibus quidem nesciunt labore molestias quis enim rerum expedita
                    distinctio quos dicta quia reiciendis velit?</template>
            </Engagement>
            <Engagement>
                <template #logo>LOGO</template>
                <template #header>HEADER</template>
                <template #info> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestiae officiis veritatis
                    aliquid consectetur, aliquam voluptatibus quidem nesciunt labore molestias quis enim rerum expedita
                    distinctio quos dicta quia reiciendis velit?</template>
            </Engagement>
            <Engagement>
                <template #logo>LOGO</template>
                <template #header>HEADER</template>
                <template #info> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestiae officiis veritatis
                    aliquid consectetur, aliquam voluptatibus quidem nesciunt labore molestias quis enim rerum expedita
                    distinctio quos dicta quia reiciendis velit?</template>
            </Engagement>
        </Splide>
    </div>
</template>


<style>
h2 {
    padding: var(--vt-border-gap);
    margin: 20px 0 80px;
}
</style>