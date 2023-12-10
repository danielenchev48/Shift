
<script setup>
import Event from './templates/Event.vue';
</script>


<template>
    <div class="events">
        <Event>
            <template #img><img src="../assets/img/thumbnails/sportCar.jpeg" alt=""></template>
            <template #header>HEADER</template>
            <template #info>TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
                TEXT TEXT TEXT</template>
        </Event>
        <Event>
            <template #img><img src="../assets/img/thumbnails/rally.jpeg" alt=""></template>
            <template #header>HEADER</template>
            <template #info>TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
                TEXT TEXT TEXT</template>
        </Event>
        <Event>
            <template #img><img src="../assets/img/thumbnails/nightDrive.jpeg" alt=""></template>
            <template #header>HEADER</template>
            <template #info>TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
                TEXT TEXT TEXT</template>
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
    border-bottom: solid 1px;
}

.borderAccs {
    display: flex;
    margin: var(--vt-border-gap);
    justify-content: space-between;
    align-items: center;

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