<script setup >
import NavBarLinks from './NavBarLinks.vue';
import NavBarMenu from './NavBarMenu.vue';


window.onscroll = function () {
    if (this.oldScroll < this.scrollY) {
        document.querySelector('nav').classList.add('hidden')
    } else {
        document.querySelector('nav').classList.remove('hidden')
    }
    this.oldScroll = this.scrollY;
}

function openMenu() {
    var menu = document.querySelector('.navMenuWrapper')
    menu.classList.add('opened')
}

</script>

<template>
    <nav>
        <div class="logo">
            <img src="../../assets/img/shift.png" alt="carLogo">
        </div>
        <div class="links">
            <NavBarLinks />
        </div>
        <div class="buttonWrapper">
            <div class="moreButton" :onclick="openMenu">&#11044; <span>&#11044;</span> &#11044;</div>
        </div>
        <NavBarMenu />
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

    >div {
        flex: 1 1 0;
    }

    .logo {

        img {
            cursor: pointer;
            height: 27px;
            filter: brightness(5.5);
        }
    }

    .buttonWrapper {
        text-align: right;
        font-size: 7px;
        transform: translateY(-25%);

        .moreButton {
            width: 100%;
            display: inline;
            cursor: pointer;

            span {
                margin: 0 2px;
                transition: 0.2s;
            }

            &:hover {
                span {
                    margin: 0 4px;
                }
            }
        }
    }
}
</style>