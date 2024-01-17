<script setup>
import { computed } from 'vue'
import Projects from './Projects.vue';
import MobileLinks from './MobileLinks.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
function closeMenu() {
    console.log('heo')
    document.querySelector('.navMenuWrapper').classList.remove('opened')
}
</script>

<template>
    <div class="navMenuWrapper">
        <Projects />
        <MobileLinks />
    </div>
</template>

<style lang="scss">
@keyframes openAnim {
    0% {
        right: 0;
    }

    100% {
        right: 100%;
    }
}

.navMenuWrapper {
    position: fixed;
    top: 0;
    bottom: 50px;
    right: 0;
    left: 0;
    background: transparent;
    visibility: hidden;
    color: rgb(255, 213, 213);


    @media screen and (max-height:610px),
    (max-width:800px) {
        bottom: 0;
        height: 100vh;
    }

    &.opened {
        visibility: visible;
        background: #252422;
        transition: 0.4s;

        * {
            visibility: visible;
            pointer-events: all;
        }

        .menu {
            right: 0;
            left: 0;

            @media screen and (min-width: 900px) {
                transition: 0.7s;
                transition-delay: 0.3s;
            }
        }

        .titles {
            color: unset;
            transition-delay: 1.3s;

            @media screen and (max-width:900px) {
                transition-delay: unset;
            }
        }

        .closeButtonWrapper {
            color: unset;
            transition-delay: 1.3s;


            @media screen and (max-width:900px) {
                transition-delay: unset;
            }
        }

        .carousel::after {
            animation: openAnim;
            animation-duration: 1.5s;
            transition-timing-function: ease-out;
            animation-delay: 0.1s;

            @media screen and (max-width:900px) {
                animation-duration: 0s;
            }
        }

        .info {
            transition: 0.5s;
        }

        .more {

            a,
            p {
                transition: 0.5s;
            }
        }

        .navMenuFooter {
            color: #ffffff56;
            transition-delay: 1.3s;

            @media screen and (max-width:900px) {
                transition-delay: unset;
            }
        }
    }
}
</style>