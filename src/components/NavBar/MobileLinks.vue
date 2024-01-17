<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import NavBarLinks from './NavBarLinks.vue';

function closeMenu() {
    document.querySelector('.navMenuWrapper').classList.remove('opened')
}

function toProjects() {
    document.querySelector('.mobileLinksWrapper').style.display = 'none'
}

</script>

<template>
    <div class="mobileLinksWrapper">
        <div class="logo">SHIFT&#174;</div>
        <div class="mobileLinks">
            <NavBarLinks />
            <a :onclick="toProjects">My other projects </a>
            <div class="closeButtonWrapper" :onclick="closeMenu">
                <div class="closeButton">
                    <FontAwesomeIcon icon="fa-solid fa-xmark" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.mobileLinksWrapper {
    position: absolute;
    height: 100%;
    width: 100%;
    background: #252422;
    z-index: 2;
    color: rgb(255, 213, 213);
    padding-top: 20px;
    padding-left: 50px;

    @media screen and (min-width:900px) {
        display: none;
    }

    .logo {
        font-size: 50px;
        font-weight: bold;
        margin-bottom: 100px;
    }


    .mobileLinks {
        a {
            text-decoration: none;
            color: rgb(255, 213, 213);
            display: block;
            font-size: 30px;
            margin-bottom: 40px;
            text-transform: uppercase;
            font-weight: bold;
        }

    }
}
</style>