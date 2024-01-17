<script setup>
import { SplideSlide } from '@splidejs/vue-splide';

</script>
<template>
    <SplideSlide>
        <div class="menuBoxWrapper">
            <div class="menuProjectWrapper">
                <div class="thumbnail">
                    <slot name="thumbnail"></slot>
                </div>
                <div class="info">
                    <div class="title">
                        <h3>
                            <slot name="title"></slot>
                        </h3>
                        <h6>
                            <slot name="subTitle"></slot>
                        </h6>
                    </div>
                    <div class="more">
                        <p>
                            <slot name="info"></slot>
                        </p>
                        <div class="link">
                            <slot name="link"></slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <slot name="index"></slot>
        </div>
    </SplideSlide>
</template>

<style lang="scss">
.menuBoxWrapper {
    border-left: solid 1px;
    padding-bottom: 20px;
    margin-bottom: 10px;


    .menuProjectWrapper {
        visibility: hidden;
        position: relative;
        margin: 0 10px;
        height: 55vh;

        .info {
            background-color: #252422;
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 100px;
            padding: 20px;
            box-sizing: border-box;

            .title {
                position: absolute;
                font-size: 20px;

                h3 {
                    font-weight: bold;
                    margin-bottom: 10px;
                }
            }

            .more {
                margin-top: 0;
                display: flex;
                flex-direction: column;
                align-content: flex-start;
                flex-wrap: wrap;
                gap: 20px;
                transition: 0.5s;

                a,
                p {
                    color: transparent;
                    visibility: hidden;
                    font-size: 12px;
                    text-transform: none;
                }

                a {
                    font-weight: bold;
                }
            }
        }

        &:hover {
            .info {
                height: 200px;

                .more {
                    margin-top: 90px;

                    a,
                    p {
                        color: rgb(255, 213, 213);
                        visibility: visible;
                    }
                }
            }

            .thumbnail {
                img {
                    transform: scale(var(--unscaled-thumbnail));
                }
            }

        }

        .thumbnail {
            background-color: rgb(163, 163, 163);
            height: 100%;
            margin: 1px;
            overflow: hidden;

            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
                transform: scale(var(--scaled-thumbnail));
                transition: 0.3s;
            }
        }
    }
}
</style>