<script setup>
import { Splide } from '@splidejs/vue-splide';
import MenuLinkTemp from './MenuLinkTemp.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

function closeMenu() {
    document.querySelector('.navMenuWrapper').classList.remove('opened')

    if (window.innerWidth < 900) {
        document.querySelector('.mobileLinksWrapper').style.display = 'inline-block'
    }
}

function returnToMLinks() {
    document.querySelector('.mobileLinksWrapper').style.display = 'inline-block'
}

const options = {
    type: 'slide',
    perPage: 3,
    breakpoints: {
        1100: {
            perPage: 2,
        },

        800: {
            perPage: 1,
            drag: true,
        },
        500: {
            padding: '10px',
        }
    },
    arrows: false,
    drag: 'free',
    padding: '80px',
    rewindByDrag: false,
    pagination: false,
    flickPower: 100,
}
</script>

<template>
    <div class="menu">
        <div class="titles">
            <div class="dot">&#11044;</div>
            <div class="arrow" :onclick="returnToMLinks">
                <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
            </div>
            <h4><span>(4) My other projects</span>&#169;23 c/o Shift&#174;</h4>
            <p>A collection of websites crafted using a variety of technologies, showcasing unique features and
                functionalities</p>
        </div>
        <div class="carousel">
            <Splide :options="options" aria-label="Links">
                <MenuLinkTemp>
                    <template #thumbnail> <img src="../../assets/img/otherProjects/elixir.png" /> </template>
                    <template #title>Elixir</template>
                    <template #subTitle>Pizzaria Restaurant</template>
                    <template #info>Elixir, artisanal craftsmanship, finest ingredients, an unparalleled Italian
                        dining.</template>
                    <template #link> <a href="https://danielenchev48.github.io/ElixirRestaurant/">Visit The
                            Site</a></template>
                    <template #index>01</template>
                </MenuLinkTemp>
                <MenuLinkTemp>
                    <template #thumbnail> <img src="../../assets/img/otherProjects/portfolio.jpg" /> </template>
                    <template #title>Portfolio</template>
                    <template #subTitle>My skills and ethics</template>
                    <template #info>A showcase of my latest skills, applications used, ethics and certificates.
                    </template>
                    <template #link> <a href="https://danielenchev48.github.io/Portfolio/">Visit The Site</a></template>
                    <template #index>02</template>
                </MenuLinkTemp>
                <MenuLinkTemp>
                    <template #thumbnail> <img src="../../assets/img/otherProjects/gaming.png" /> </template>
                    <template #title>Gaming-Tech-Inc</template>
                    <template #subTitle>Gaming website and store</template>
                    <template #info>Stay informed with the latest gaming updates and explore a diverse array of titles
                        at our gaming news and store platform.</template>
                    <template #link> <a href="https://danielenchev48.github.io/Gaming-Tech-Inc/home.html">Visit The
                            Site</a></template>
                    <template #index>03</template>
                </MenuLinkTemp>
                <MenuLinkTemp>
                    <template #thumbnail> <img src="../../assets/img/otherProjects/blueasy.png" /> </template>
                    <template #title>Blueasy</template>
                    <template #subTitle>Practice website</template>
                    <template #info>A pixel-perfect website, build while practicing basic frontend technologies.
                    </template>
                    <template #link> <a href="https://danielenchev48.github.io/Blueasy/index.html">Visit The
                            Site</a></template>
                    <template #index>04</template>
                </MenuLinkTemp>
            </Splide>
        </div>
        <div class="navMenuFooter">
            <div>Shift&#174;, INC</div>
            <div>10 - 23C</div>
        </div>
        <div class="closeButtonWrapper" :onclick="closeMenu">
            <div class="closeButton">
                <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.menu {
    position: fixed;
    top: 0;
    bottom: 50px;
    right: -100%;
    left: 100%;
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

        .arrow {
            display: none;
            font-size: 20px;
        }

        @media screen and (max-width: 700px) {
            gap: 10px;
            flex-direction: column;
            padding: 20px 5% 0;


        }

        @media screen and (max-width: 900px) {
            .arrow {
                display: inline;
            }

            .dot {
                // visibility: hidden;
                display: none;
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

    @media screen and (max-width:900px) {
        transition: unset;
    }

    @media screen and (max-width:500px) {
        font-size: 20px;
        width: 35px;
        height: 35px;
    }
}
</style>