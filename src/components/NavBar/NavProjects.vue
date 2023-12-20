<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import MenuLinkTemp from './MenuLinkTemp.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

function closeMenu() {
    document.querySelector('.navMenuWrapper').classList.remove('opened')
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
            <div>&#11044;</div>
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