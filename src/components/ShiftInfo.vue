<template>
    <div class="infoWrapper">
        <div class="info">
            <p>
                Our
                commitment to redefining racing excellence resonates through our pursuit of precision, innovation, and
                unyielding dedication. Embrace the allure of our meticulously crafted events, where the convergence of skill
                and
                passion embodies the pinnacle of racing sophistication.
            </p>
            <div class="animatedButton">View More</div>
        </div>
        <div class="logo">
            <img src="../assets/img/shiftLogo.png" alt="shiftLogo">
        </div>
    </div>
</template>

<style lang="scss">
.infoWrapper {
    display: flex;
    margin: var(--vt-border-gap);
    padding: 80px 0;
    justify-content: space-between;

    @media screen and (max-width:1300px) {
        flex-direction: column;
        gap: 70px;
    }

    .info {
        font-size: 30px;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: start;

        p {
            line-height: 40px;
        }

        @media screen and (max-width:1300px) {
            width: 70%;
        }
    }

    .logo {
        display: flex;
        align-items: flex-start;

        @media screen and (max-width:1300px) {
            justify-content: flex-end;
        }
    }
}
</style>