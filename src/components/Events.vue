
<script setup>
import Event from './templates/Event.vue';
</script>


<template>
    <div class="events">
        <Event>
            <template #img><img src="../assets/img/thumbnails/sportCar.jpeg" alt=""></template>
            <template #header>Drag Racing</template>
            <template #info>Experience drag racing's unmatched fusion of power and speed – where every second sparks pure
                adrenaline and unwavering competition.</template>
        </Event>
        <Event>
            <template #img><img src="../assets/img/thumbnails/rally.jpeg" alt=""></template>
            <template #header>Rally</template>
            <template #info>Explore the exhilarating world of rally racing, where precision and speed converge amidst
                challenging terrain.</template>
        </Event>
        <Event>
            <template #img><img src="../assets/img/thumbnails/nightDrive.jpeg" alt=""></template>
            <template #header>Night Races</template>
            <template #info>Step into the captivating domain of night racing, where the blend of speed and precision shines
                under the night sky.</template>
        </Event>
    </div>
    <div class="borderAccs">
        <div>00</div>
        <div class="second">/05 <span class="dot">&#x2022;</span></div>
    </div>
</template>

<style lang="scss">
.events {
    display: flex;
    justify-content: space-between;
    margin: var(--vt-border-gap);
    gap: 20px;
    padding-bottom: 100px;

    @media screen and (max-width: 1100px) {
        overflow: auto;
        padding: var(--vt-border-gap);
        padding-bottom: 50px;
        margin: unset;
    }
}

.borderAccs {
    display: flex;
    margin: var(--vt-border-gap);
    justify-content: space-between;
    align-items: center;
    border-top: solid 1px;

    .second {
        align-items: center;
        width: 65%;
        display: flex;
        justify-content: space-between;

        .dot {
            font-size: 40px;
        }
    }
}
</style>