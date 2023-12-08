<template>
    <div class="infoWrapper">
        <div class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit consequuntur dignissimos iusto
            molestiae, iure facere repellendus eveniet, voluptas nesciunt, sequi quaerat similique eligendi. Debitis rerum
            cum quibusdam saepe dolore et!
            <div class="moreButton">View More</div>
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

        .moreButton {
            border: solid 1px;
            font-size: 16px;
            border-radius: 100px;
            display: inline;
            padding: 5px 40px;
            margin-top: 50px;
            cursor: pointer;

            background:
                linear-gradient(black 50%, #000 0) 0 var(--_d, 0) /100% 200% no-repeat,
                linear-gradient(#0000 50%, #000 0) 0 var(--_d, 0) /100% 200% no-repeat;
            -webkit-background-clip: text, padding-box;
            background-clip: text, padding-box;
            transition: 0.3s;

            &:hover {
                --_d: 100%;
                color: white;

            }
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