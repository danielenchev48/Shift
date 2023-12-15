<template>
    <div class="links">
        <a href="">About</a>
        <a href="">Events</a>
        <a href="">News</a>
        <a href="">Multimedia</a>
        <a href="">Contact</a>
    </div>
</template>

<style lang="scss">
.links {
    display: flex;
    column-gap: 50px;

    @media screen and (max-width: 900px) {
        display: none;
    }

    a {
        text-decoration: none;
        color: #fff;
        text-transform: uppercase;
        position: relative;
        overflow: hidden;

        &::after {
            content: '';
            width: 100%;
            height: 1px;
            position: absolute;
            background-color: #fff;
            bottom: 0px;
            right: -100%;
            animation: unhoverAnim;
            animation-duration: 0.2s;
        }

        &:hover {
            &::after {
                animation: hoverAnim;
                animation-fill-mode: forwards;
                animation-duration: 0.2s;
            }
        }
    }
}
</style>