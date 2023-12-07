<template>
    <div class="promo">
        <video src="/vids/promo.mp4" loop autoplay></video>
    </div>
</template>

<style lang="scss">
.promo {
    overflow: hidden;
    width: 100vw;
    height: 100vh;

    video {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: top;
    }
}
</style>