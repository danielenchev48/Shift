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
.engagement {
    .logo {
        margin-bottom: 80px;
        height: 40px;

        img {
            height: 100%;
        }
    }

    .header {
        margin-bottom: 20px;
        font-size: 30px;
        text-transform: uppercase;
    }

    .info {
        font-size: 20px;

        @media screen and (max-width: 1000px) {
            font-size: 15px;
        }
    }
}
</style>