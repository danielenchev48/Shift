<template>
    <SplideSlide>
        <div class="engagement">
            <div class="logo">
                <slot name="logo"></slot>
            </div>
            <div class="header">
                <slot name="header"></slot>
            </div>
            <p class="info">
                <slot name="info"></slot>
            </p>
        </div>
    </SplideSlide>
</template>

<style lang="scss">
.sliders {
    margin-bottom: 500px;
    cursor: grab;

    &:active {
        cursor: grabbing;
    }

    .engagement {}

    .logo {
        margin-bottom: 40px;
    }

    .header {
        margin-bottom: 20px;
        font-size: 30px;
    }

    .info {
        font-size: 20px;
    }

}
</style>