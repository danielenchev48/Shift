<template>
    <div class="brand">
        <i class="icon">
            <slot name="icon"></slot>
        </i>
        <div class="details">
            <h3>
                <slot name="heading"></slot>
            </h3>
        </div>
    </div>
</template>

<style lang="scss">
.brand {
    padding: 0 50px;
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    cursor: pointer;

    .icon {
        transition: 0.5s;
    }

    h3 {
        // font-weight: bold;
        line-height: 30px;
    }

    &:hover {
        .icon {
            transform: scale(1.1);
        }

        h3 {
            text-decoration: underline 1px;
        }
    }
}
</style>