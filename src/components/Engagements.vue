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
    const progressBar = document.querySelector('.progress-bar')
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
                    <template #logo><img src='../assets/img/logos/google.png' alt="googleLogo"></template>
                    <template #header>google</template>
                    <template #info> Our embedded partnership with Google is as deep as it gets. We’re the lead creative
                        agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more
                        about our partnership </template>
                </Engagement>
                <Engagement>
                    <template #logo><img src='../assets/img/logos/kfc.png' alt="kfcLogo"></template>
                    <template #header>kfc</template>
                    <template #info>An award-winning global, digital transformation engagement spanning eCommerce, mobile
                        app, and new drive thru experiences. Bringing KFC’s brand story to life while making it easier for
                        customers to buy chicken. Learn more about our partnership </template>
                </Engagement>
                <Engagement>
                    <template #logo><img src='../assets/img/logos/wilson.png' alt="wilsonLogo"></template>
                    <template #header>wilson</template>
                    <template #info> A reimagining of Wilson’s brand visual identity, and brand campaign, to support a new
                        product drop and the launch of the first brick and mortar retail location in the brand’s 108-year
                        history. Read our full case study </template>
                </Engagement>
                <Engagement>
                    <template #logo><img src='../assets/img/logos/at&t.png' alt="at&tLogo"></template>
                    <template #header>at&t</template>
                    <template #info>Redesigning the digital flagship for the largest telecommunications company in the
                        world. Creating frictionless paths to purchase for a wide range of consumers across a vast portfolio
                        of products and services. </template>
                </Engagement>
                <Engagement>
                    <template #logo><img src='../assets/img/logos/patagonia.png' alt="patagoniaLogo"></template>
                    <template #header>patagonia</template>
                    <template #info>Ongoing partnership providing strategy, branding, experience design, and development
                        focused on bringing their mission and offerings to consumers through brand-led programs and
                        platforms. Read our full case study </template>
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
        margin: 20px 0 100px;
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
        height: 2px;
        transition: width 400ms ease;
        width: 40%;
    }
}
</style>