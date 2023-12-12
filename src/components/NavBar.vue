<script setup >
window.onscroll = function () {
    if (this.oldScroll < this.scrollY) {
        document.querySelector('nav').classList.add('hidden')
    } else {
        document.querySelector('nav').classList.remove('hidden')
    }
    this.oldScroll = this.scrollY;
}

</script>

<template>
    <nav class="navigation"></nav>
</template>

<style lang="scss">
nav {
    height: 130px;
    background: #292929ce;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    transition: 0.25s;

    &.hidden {
        top: -130px;
    }
}
</style>