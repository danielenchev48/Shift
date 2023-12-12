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
    border-top: solid 2px;
    padding-top: 20px;
    margin-bottom: 60px;
    cursor: pointer;

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

        h2 {
            font-size: 40px;
            display: inline-block;
            width: 70%;
            font-weight: bold;
            text-transform: uppercase;
        }

        .pressNumber {
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