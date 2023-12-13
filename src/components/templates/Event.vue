<template>
    <div class="event">
        <div class="thumbnail">
            <slot name="img"></slot>
        </div>
        <div class="header">
            <slot name="header"></slot>
        </div>
        <p>
            <slot name="info"></slot>
        </p>
    </div>
</template>

<style lang="scss">
.event {
    flex: 1 1 0;
    cursor: pointer;

    .header {
        display: inline-block;
        font-size: 25px;
        line-height: 24px;
        height: 26px;
        margin: 15px 0;
        font-weight: bold;
    }

    .thumbnail {
        overflow: hidden;

        img {
            width: 100%;
            height: 550px;
            transition: 0.3s;
            transform: scale(var(--scaled-thumbnail));
            object-fit: cover;

            @media screen and (max-width: 1100px) {
                width: 350px;
                height: 400px;
            }

        }
    }

    p {
        width: 70%;
        font-size: 14px;
        line-height: 22px;
    }

    &:hover {

        .header {
            border-bottom: solid 2px;
            box-sizing: border-box;
        }

        img {
            transform: scale(var(--unscaled-thumbnail));
        }
    }
}
</style>