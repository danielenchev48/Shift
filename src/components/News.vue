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
                <template #thumbnail> <img src="../assets/img/news/formula.jpg" alt=""></template>
                <template #title> Formula 1's New Regulations Set to Redefine Racing in the 2023 Season </template>
                <template #pressNumber>135.55.11</template>
            </NewsBox>
            <NewsBox>
                <template #thumbnail> <img src="../assets/img/news/speed.jpg" alt=""></template>
                <template #title> Record-Breaking Speeds: Iconic Circuit Sees Unprecedented Lap Times</template>
                <template #pressNumber>135.55.11</template>
            </NewsBox>
            <NewsBox>
                <template #thumbnail> <img src="../assets/img/news/team.jpg" alt=""></template>
                <template #title> Underdog Triumph: Unexpected Team Claims Victory at Prestigious Endurance Race</template>
                <template #pressNumber>135.55.11</template>
            </NewsBox>
            <NewsBox>
                <template #thumbnail> <img src="../assets/img/news/finishLine.jpg" alt=""></template>
                <template #title> Controversy at the Finish Line: Disputed Decisions Rock the World of
                    Motorsports</template>
                <template #pressNumber>135.55.11</template>
            </NewsBox>
            <NewsBox>
                <template #thumbnail> <img src="../assets/img/news/offRoad.jpg" alt=""></template>
                <template #title> Unconventional Routes and Unpredictable Outcomes in Off-Road
                    Racing</template>
                <template #pressNumber>135.55.11</template>
            </NewsBox>
        </div>
    </div>
</template>

<style lang="scss">
.newsWrapper {
    margin: var(--vt-border-gap);

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        row-gap: 30px;
        margin-top: 200px;

        @media screen and (max-width: 1200px) {
            margin-top: 50px;
        }


        h2 {
            width: 200px;
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