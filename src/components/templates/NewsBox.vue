<template>
    <div class="newsBox">
        <div class="thumbnail">
            <slot name="thumbnail"></slot>
        </div>
        <div class="title">
            <h2>
                <slot name="title"></slot>
            </h2>
            <div class="arrowsBox">
                <div class="arrow">
                    <span> &#129130;</span> &#129130;
                </div>
            </div>
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
    height: 25vw;
    min-height: 200px;
    border-top: solid 2px;
    padding-top: 20px;
    margin-bottom: 60px;
    cursor: pointer;


    @media screen and (max-width: 900px) {
        margin-bottom: 20px;
        height: 30vh;
    }

    @media screen and (max-width: 500px) {
        height: 200px;
        min-height: unset;
    }

    &:hover {
        .thumbnail {
            img {
                transform: scale(var(--unscaled-thumbnail));
            }
        }

        .title {
            h2 {
                text-decoration: underline;
            }

            .arrowsBox {
                .arrow {
                    transition: 0.5s;
                    right: -102px;
                }
            }
        }
    }

    .thumbnail {
        width: 35%;
        margin-right: 20px;
        overflow: hidden;
        min-width: 200px;

        @media screen and (max-width: 500px) {
            // width: 20%;
            min-width: 120px;
        }

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            transition: 0.3s;
            transform: scale(var(--scaled-thumbnail));
        }
    }

    .title {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        width: 65%;
        position: relative;
        text-transform: uppercase;

        h2 {
            font-size: 30px;
            display: inline-block;
            width: 70%;
            font-weight: bold;
            text-transform: uppercase;

            @media screen and (max-width: 1000px) {
                font-size: 20px;
            }

            @media screen and (max-width: 600px) {
                font-size: 14px;
            }
        }

        .pressNumber {

            @media screen and (max-width: 900px) {
                font-size: 10px;
            }

            @media screen and (max-width: 600px) {
                font-size: 8px;
            }

            span {
                font-weight: bold;
            }
        }

        .arrowsBox {
            height: 50px;
            width: 40px;
            position: absolute;
            right: 0;
            overflow: hidden;

            .arrow {
                position: absolute;
                right: 0;
                top: 0;
                font-size: 40px;
                display: flex;
                width: 140px;
                justify-content: space-between;
            }
        }
    }
}
</style>