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

<style>
.event {
    flex: 1 1 0;
    cursor: pointer;

    .header {
        display: inline-block;
        font-size: 25px;
        line-height: 25px;
        height: 26px;
        margin: 15px 0;
    }

    .thumbnail {
        overflow: hidden;

        img {
            width: 100%;
            height: 550px;
            transition: 0.3s;
            transform: scale(1.12);
            object-fit: cover;
        }
    }

    p {
        width: 70%;
        font-size: 14px;
    }

    &:hover {

        .header {
            border-bottom: solid 1px;
            box-sizing: border-box;
        }

        img {
            transform: scale(1.05);
        }
    }
}
</style>