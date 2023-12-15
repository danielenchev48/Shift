<script setup>
function closeMenu() {
    document.querySelector('.menuWrapper').classList.remove('opened')
    document.body.style.overflow = 'unset';
}
</script>

<template>
    <div class="menuWrapper" ref="el">
        <div class="menu" ref="el"></div>
        <div class="closeButton" :onclick="closeMenu">&#11044; <span>&#11044;</span> &#11044;</div>
    </div>
</template>

<style lang="scss">
.menuWrapper {
    position: fixed;

    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    transition: 0.2s;
    visibility: hidden;

    &.opened {
        inset: 0;
        visibility: visible;
        transition: 0.5s;
        background: rgba(46, 46, 46, 0.699);
    }

}
</style>