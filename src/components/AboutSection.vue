<script setup>
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();

window.addEventListener("msgEvent", (e) => {
    const { target, way } = e.detail;

    if (way === "enter") {
        target.classList.add("boxFixed")
        document.querySelector('.msgWrapper').classList.remove('boxEnded')

    } else if (way === "leave") {
        target.classList.remove("boxFixed")
    }
});

window.addEventListener("stopEventOnEnd", (e) => {
    const { target, way } = e.detail;
    if (way === "enter") {
        document.querySelector('.boxFixed').classList.remove('boxFixed')
        document.querySelector('.msgWrapper').classList.add('boxEnded')
    }
});
</script>

<template>
    <div class="aboutWrapper" data-scroll data-scroll-repeat data-scroll-position="end,end" data-scroll-offset="30%,-10%"
        data-scroll-call="stopEventOnEnd">
        <div class="msgWrapper">
            <div class="msg" data-scroll data-scroll-position="end,start" data-scroll-repeat data-scroll-ignore-fold
                data-scroll-offset='30%, -161%' data-scroll-call="msgEvent">
                <h2>With SHIFT&#174; get ready for epic races! Feel the speed, chase the win.</h2>
                <h3>Weekly <span>racing tournaments</span></h3>
                <div class="animatedButton">ABOUT US</div>
            </div>
        </div>
        <div class="previewSection">
            <div class="preview"> <img src="../assets/img/previews/dirtMotor.jpg" alt="dirtRacing"></div>
            <div class="preview"><video src="../assets/img/previews/19265533.mp4" muted autoplay repeat></video></div>
            <div class="preview"><img src="../assets/img/previews/nascar.jpg" alt="dirtRacing"></div>
            <div class="preview"><video src="../assets/img/previews/47095794.mp4" muted autoplay repeat></video></div>
        </div>
    </div>
</template>


<style lang="scss">
.aboutWrapper {
    margin: var(--vt-border-gap);
    display: flex;
    margin-top: 150px;
    justify-content: flex-end;

    .msgWrapper {
        width: 50%;

        .msg {
            text-transform: uppercase;
            height: 60vh;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;

            h2 {
                font-size: 3.35vw;
                width: 90%;
                margin-bottom: -20px;
                font-weight: bold;
            }

            h3 {
                font-size: 1.8vw;
            }

            span {
                font-weight: bold;
            }

            .animatedButton {
                margin: 0;
            }
        }
    }


    .boxFixed {
        position: fixed;
        width: 45%;
        top: 10%;
        left: 5%;
        height: 80vh;
    }

    .boxEnded {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .previewSection {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 10vh;

        .preview {
            height: 50vh;
            width: 100%;

            video,
            img {
                object-fit: cover;
                height: 100%;
                width: 100%;
            }
        }
    }
}
</style>
