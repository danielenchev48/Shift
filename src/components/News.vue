<script setup>
import NewsBox from './templates/NewsBox.vue';
</script>

<template>
    <div class="newsWrapper">
        <div class="header">
            <h2>FEATURED NEWS</h2>
            <div class="animatedButton">VIEW ALL</div>
        </div>
        <div class="news">
            <NewsBox>
                <template #thumbnail> <img src="../assets/img/thumbnails/rally.jpeg" alt=""></template>
                <template #title> Title</template>
                <template #pressNumber>135.55.11</template>
            </NewsBox>
        </div>
    </div>
</template>

<style lang="scss">
.newsWrapper {
    margin: var(--vt-border-gap);
    // height: 5000px;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 200px;

        h2 {
            width: 100px;
            font-size: 40px;
            font-weight: bold;
        }

        .animatedButton {
            margin: 0;
        }
    }

    .news {
        margin-top: 50px;


    }
}
</style>