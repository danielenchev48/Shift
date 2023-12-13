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
    <nav>
        <div class="logo">
            <img src="../assets/img/shift.png" alt="" :onclick="() => console.log('helo')">
        </div>
        <div class="links">
            <a href="">About</a>
            <a href="">Events</a>
            <a href="">News</a>
            <a href="">Multimedia</a>
            <a href="">Contact</a>
        </div>
        <div class="moreButton">o o o</div>
    </nav>
</template>

<style lang="scss">
@keyframes hoverAnim {
    0% {
        right: 100%;
    }

    100% {
        right: 0;
    }
}

@keyframes unhoverAnim {
    0% {
        right: 0%;
    }

    100% {
        right: -100;
    }
}


nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    transition: 0.25s;

    height: 130px;
    padding: 0 50px;
    background: #191918f5;
    color: white;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &.hidden {
        top: -130px;
    }

    div {
        flex: 1 1 0;
    }

    .logo {

        img {
            cursor: pointer;
            height: 27px;
            filter: brightness(5.5);
        }
    }

    .links {
        display: flex;
        column-gap: 50px;

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

    .moreButton {
        text-align: right;
    }

}
</style>