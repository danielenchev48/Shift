<template>
    <div class="events">
        <div class="event">
            <div class="thumbnail"><img src="../assets/img/thumbnails/sportCar.jpeg" alt=""></div>
            <div class="header">HEADER</div>
            <p>TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
            </p>
        </div>
        <div class="event">
            <div class="thumbnail"><img src="../assets/img/thumbnails/rally.jpeg" alt=""></div>

            <div class="header">HEADER</div>
            <p>TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
            </p>
        </div>
        <div class="event">
            <div class="thumbnail"><img src="../assets/img/thumbnails/nightDrive.jpeg" alt=""></div>
            <div class="header">HEADER</div>
            <p>TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
            </p>
        </div>
    </div>
    <div class="borderAccs">
        <div>00</div>
        <div class="second">/05 <span class="dot">&#x2022;</span></div>
    </div>
</template>

<style lang="scss">
.events {
    display: flex;
    justify-content: space-between;
    margin: var(--vt-border-gap);
    gap: 20px;
    padding-bottom: 100px;
    border-bottom: solid 1px;

    .event {
        flex: 1 1 0;

        .header {
            display: inline-block;
            font-size: 25px;
            margin: 15px 0;
            line-height: 25px;

        }

        .thumbnail {
            overflow: hidden;

            img {
                width: 100%;
                height: 550px;
                transition: 0.3s;
                transform: scale(1.12);
                object-fit: cover;
            }
        }

        p {
            width: 70%;
            font-size: 14px;
        }

        &:hover {

            .header {
                border-bottom: solid 2px;
            }

            img {
                transform: scale(1.05);
            }
        }
    }
}

.borderAccs {
    display: flex;
    margin: var(--vt-border-gap);
    justify-content: space-between;
    align-items: center;

    .second {
        align-items: center;
        width: 65%;
        display: flex;
        justify-content: space-between;

        .dot {
            font-size: 40px;
        }
    }
}
</style>