<template>
    <footer>
        <div class="sections">
            <section class="logo"><img src="../assets/img/shift.png" alt=""></section>
            <section class="msg">Gear Up for the Ultimate Racing Tournament!
                <a href="mailto:shiftcompany@mail.com" type="email">shiftcompany@mail.com</a>
            </section>
            <section class="subscribe">
                <h2><span>&#11044;</span>SUBSCRIBE FOR LATEST NEWS</h2>
                <div class="inputWrapper">
                    <input type="text" placeholder="Email Address">
                    <span class="arrow">&#129130;</span>
                </div>
            </section>
            <section class="lists">
                <div>
                    <h2><span>&#11044;</span>Technologies</h2>
                    <a href="https://vuejs.org/">Vue</a>
                    <a href="https://github.com/">Github</a>
                    <a href="https://sass-lang.com/">Scss</a>
                    <a href="https://locomotivemtl.github.io/locomotive-scroll/">Locomotive Scroll</a>
                </div>
                <div>
                    <h2><span>&#11044;</span>My other projects</h2>
                    <a href="https://danielenchev48.github.io/ElixirRestaurant/">ElixirRestaurant</a>
                    <a href="https://danielenchev48.github.io/Gaming-Tech-Inc/home.html">Gaming-Tech-Inc</a>
                    <a href="https://danielenchev48.github.io/Blueasy/index.html">Blueasy</a>
                </div>
                <div>
                    <h2><span>&#11044;</span>For me</h2>
                    <a href="https://www.linkedin.com/in/daniel-enchev-480812299/">LinkedIn</a>
                    <a href="https://github.com/danielenchev48">Github</a>
                    <a href="https://danielenchev48.github.io/Portfolio/">Portfolio</a>
                </div>
            </section>
        </div>
        <div class="footerEnd">
            <div>SHIFT&#174;, INC 10 - 23&#169;</div>
            <div>Racing Towards Unforgettable Moments<span>&#8482;</span></div>
            <div>TERMS, PRIVACY POLICY</div>
        </div>
    </footer>
</template>

<style lang="scss">
footer {
    background-color: #252422;
    padding: 110px 0 50px;
    position: relative;

    @media screen and (max-width: 810px) {
        padding-top: 40px;
    }

    .sections {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: var(--vt-border-gap);
        row-gap: 120px;
        color: #fff;

        @media screen and (max-width: 810px) {
            row-gap: 50px;
            flex-direction: column;
        }

        section {
            width: 45%;

            @media screen and (max-width: 810px) {
                width: unset;
                flex: 1 1 0;
            }
        }

        .logo {
            height: 30px;

            img {
                height: 100%;
                filter: brightness(6);
            }
        }

        .msg {
            font-size: 30px;

            @media screen and (max-width: 810px) {
                font-size: 20px;
            }

            a {
                display: block;
                color: #fff;
            }
        }

        .subscribe {
            border-bottom: solid 1px;
            height: 100%;

            h2 {
                font-size: 15px;
                font-weight: bold;

                span {
                    margin-right: 5px;
                }
            }

            .inputWrapper {
                display: flex;
                align-items: center;
                margin-top: 10px;

                input {
                    width: 100%;
                    background: transparent;
                    border: none;
                    padding: 18px 0;
                    font-size: 16px;
                    color: #fff;
                    letter-spacing: 1px;

                    &:focus {
                        outline: none;
                    }
                }

                ::placeholder {
                    color: #fff;
                }

                .arrow {
                    font-size: 20px;
                    cursor: pointer;
                }
            }
        }

        .lists {
            display: flex;
            flex-wrap: wrap;
            gap: 50px;

            div {
                flex: 1 1 0;
            }

            h2 {
                margin-bottom: 20px;
                font-size: 15px;
                font-weight: bold;
                text-transform: uppercase;

                span {
                    margin-right: 5px;
                }
            }

            a {
                display: block;
                color: #fff;
                text-decoration: none;
                margin-bottom: 10px;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    .footerEnd {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        height: 60px;
        padding: var(--vt-border-gap);
        margin-top: 100px;

        background-color: #191918;
        color: #5e5e5e;
        font-size: 12px;
        text-align: center;


        text-transform: uppercase;

        span {
            font-size: 15px;
        }
    }
}
</style>