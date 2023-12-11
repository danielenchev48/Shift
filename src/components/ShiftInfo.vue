<template>
    <div class="infoWrapper">
        <div class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit consequuntur dignissimos iusto
            molestiae, iure facere repellendus eveniet, voluptas nesciunt, sequi quaerat similique eligendi. Debitis rerum
            cum quibusdam saepe dolore et!
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