<script setup>
import NavProjectsVue from './NavProjects.vue';

const widthTest = window.innerWidth

function test() {
    if (widthTest > 900) {
        return <NavProjectsVue />
    } else {
        return <NavProjectsVue />
    }
}

</script>

<template>
    <div class="navMenuWrapper">
        {{ test }}
        <!-- {{ widthTest > 900 ?
            <NavProjectsVue /> :
            < NavProjectsVue /> }} -->
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

    @media screen and (max-height:610px),
    (max-width:800px) {
        bottom: 0;
        height: 100vh;
    }

    .menu {
        position: fixed;
        top: 0;
        bottom: 50px;
        right: -100%;
        left: 100%;
        color: rgb(255, 243, 232);
        transition-timing-function: ease-out;
        visibility: hidden;
        text-transform: uppercase;

        @media screen and (max-height:500px) {
            bottom: 0;
        }


        * {
            visibility: hidden;
            pointer-events: none;
            background-color: transparent;
        }

        .titles {
            padding: 50px 5% 0;
            display: flex;
            gap: 50px;
            color: transparent;
            transition: 0.5s;
            font-size: 13px;

            @media screen and (max-width: 700px) {
                gap: 10px;
                flex-direction: column;
                padding: 20px 5% 0;

                div {
                    visibility: hidden;
                }
            }

            h4 {
                width: 200px;

                span {
                    display: block;
                }
            }

            p {
                width: 40%;

                @media screen and (max-width: 700px) {
                    width: 90%;
                }
            }
        }

        .carousel {
            cursor: grab;
            margin-top: 40px;

            @media screen and (max-height:500px) {
                margin-top: 0;
            }

            .splide__slide:last-child {
                .menuBoxWrapper {
                    border-right: solid 1px;
                }
            }

            &::after {
                content: '';
                background: #252422;
                top: 0;
                bottom: 0;
                left: 0;
                position: absolute;
            }
        }

        .navMenuFooter {
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            color: transparent;
            padding: 0 80px;
            transition: 0.5s;
            pointer-events: none;
        }

        .closeButtonWrapper {
            position: absolute;
            top: 30px;
            right: 40px;
            padding: 10px;

            width: 45px;
            height: 45px;
            font-size: 30px;
            border: solid;
            border-radius: 100px;

            color: transparent;
            transition: 0.5s;
            cursor: pointer;

            .closeButton {
                position: absolute;
                top: 50%;
                right: 50%;
                transform: translate(50%, -50%);
            }
        }
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
            transition: 0.7s;
            transition-delay: 0.3s;
        }

        .titles {
            color: unset;
            transition-delay: 1.3s;
        }

        .closeButtonWrapper {
            color: unset;
            transition-delay: 1.3s;
        }

        .carousel::after {
            animation: openAnim;
            animation-duration: 1.5s;
            transition-timing-function: ease-out;
            animation-delay: 0.1s;
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
        }
    }
}
</style>