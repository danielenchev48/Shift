<template>
    <div class="brand">
        <i>
            <slot name="icon"></slot>
        </i>
        <div class="details">
            <h3>
                <slot name="heading"></slot>
            </h3>
        </div>
    </div>
</template>

<style>
.brand {
    padding: 0 50px;
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
</style>