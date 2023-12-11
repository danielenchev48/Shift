<template>
    <div class="newsBox">
        <div class="thumbnail">
            <slot name="thumbnail"></slot>
        </div>
        <div class="title">
            <h2>
                <slot name="title"></slot>
            </h2>
            <div class="arrow">ARROW</div>
            <div class="pressNumber"><span>PRESS </span>
                <slot name="pressNumber"></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.newsBox {
    display: flex;
    flex-direction: row;
    height: 20vw;
    border-top: solid 1px;
    padding-top: 20px;

    .thumbnail {
        width: 30%;
        margin-right: 20px;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    .title {
        display: flex;
        justify-content: space-between;
        width: 70%;
        position: relative;

        h2 {
            font-size: 40px;
        }

        .pressNumber {
            position: absolute;
            bottom: 0;
            font-size: 12px;

            span {
                font-weight: bold;

            }
        }
    }
}
</style>