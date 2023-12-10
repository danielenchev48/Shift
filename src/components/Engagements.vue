<script setup>
import { Splide } from '@splidejs/vue-splide';
import Engagement from './templates/Engagement.vue'
import { onMounted } from 'vue';

const options = {
    type: 'slide',
    perPage: 3,
    arrows: false,
    drag: 'free',
    rewindByDrag: false,
    gap: '50px',
    padding: '5%',
    pagination: false,
    flickPower: 100,
}

onMounted(() => {
    const slider = document.querySelector('.splide__list')
    const progressBar = document.querySelector('.my-carousel-progress-bar')
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(() => {
            const arr = slider.style.transform.split('')
            arr.splice(0, 11)
            arr.splice(arr.length - 3, 3)

            const barPixels = Number(arr.join(''))
            const sceenWidth = window.innerWidth
            const barPercentage = barPixels / sceenWidth

            if (options.perPage === 3) {
                progressBar.style.transform = `translateX(${barPercentage * -250}%)`
            } else if (options.perPage === 2) {
                progressBar.style.transform = `translateX(${barPercentage * -110}%)`
            }
        });
    });
    observer.observe(slider, { attributes: true, attributeFilter: ['style'] });
})

</script>

<template>
    <div class="engagementWrapper">
        <h2>FEATURED ENGAGEMENTS</h2>
        <div class="sliders">
            <Splide :options="options" @Splide:dragged="test" aria-label="My Favorite Images">
                <Engagement>
                    <template #logo>LOGO</template>
                    <template #header>HEADER</template>
                    <template #info> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestiae officiis
                        veritatis
                        aliquid consectetur, aliquam voluptatibus quidem nesciunt labore molestias quis enim rerum expedita
                        distinctio quos dicta quia reiciendis velit?</template>
                </Engagement>
                <Engagement>
                    <template #logo>LOGO</template>
                    <template #header>HEADER</template>
                    <template #info> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestiae officiis
                        veritatis
                        aliquid consectetur, aliquam voluptatibus quidem nesciunt labore molestias quis enim rerum expedita
                        distinctio quos dicta quia reiciendis velit?</template>
                </Engagement>
                <Engagement>
                    <template #logo>LOGO</template>
                    <template #header>HEADER</template>
                    <template #info> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestiae officiis
                        veritatis
                        aliquid consectetur, aliquam voluptatibus quidem nesciunt labore molestias quis enim rerum expedita
                        distinctio quos dicta quia reiciendis velit?</template>
                </Engagement>
                <Engagement>
                    <template #logo>LOGO</template>
                    <template #header>HEADER</template>
                    <template #info> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestiae officiis
                        veritatis
                        aliquid consectetur, aliquam voluptatibus quidem nesciunt labore molestias quis enim rerum expedita
                        distinctio quos dicta quia reiciendis velit?</template>
                </Engagement>
                <Engagement>
                    <template #logo>LOGO</template>
                    <template #header>HEADER</template>
                    <template #info> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestiae officiis
                        veritatis
                        aliquid consectetur, aliquam voluptatibus quidem nesciunt labore molestias quis enim rerum expedita
                        distinctio quos dicta quia reiciendis velit?</template>
                </Engagement>
            </Splide>
        </div>
        <div class="progress">
            <div class="progress-bar"></div>
        </div>
    </div>
</template>


<style lang="scss" >
.engagementWrapper {
    margin-bottom: 500px;

    h2 {
        padding: var(--vt-border-gap);
        margin: 20px 0 80px;
        font-size: 40px;
        width: 100px;
    }

    .sliders {
        cursor: grab;

        &:active {
            cursor: grabbing;
        }

        .engagement {
            padding-bottom: 100px;
        }
    }

    .progress {
        margin: var(--vt-border-gap);
        background: #ccc;
        overflow: hidden;
        border-radius: 20px;
    }

    .progress-bar {
        background: rgb(78, 78, 78);
        border-radius: 20px;
        height: 3px;
        transition: width 400ms ease;
        width: 40%;
    }
}
</style>