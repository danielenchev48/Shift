<template>
    <div class="promo">
        <video src="/vids/promo.mp4" loop autoplay muted></video>
    </div>
</template>

<style lang="scss">
.promo {
    overflow: hidden;
    height: 100vh;

    video {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: top;
    }
}
</style>