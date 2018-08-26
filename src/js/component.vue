<template lang="html">
    <div class="notification">
        <transition-group name="fade" tag="div">
            <div class="notification_item" :style="item.style" v-for="(item, index) in items" :key="index">
                <button type="button" class="notification_item__close" @click="dismiss(index)">&times;</button>
                <h5 class="notification_item__heading" v-if="item.title">{{ item.title }}</h5>
                <span v-html="item.message"></span>
            </div>
        </transition-group>
    </div>
</template>

<script>
    export default {
        beforeMount() {
            document.querySelector('body').appendChild(this.$el)
        },
        methods: {
            dismiss(index) {
                this.$notification.dismiss(index);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .notification {
        position: fixed;
        display: flex;
        flex-direction: column;
        z-index: 10000;
        top: 15px;
        right: 0;
        width: 100%;
        min-height: 1px;
        padding: 0 15px;
        &_item {
            position: relative;
            display: block;
            width: 100%;
            border: none;
            box-shadow: 1px 1px 10px rgba(0, 0, 0, .4);
            padding: .65rem 1.3rem;
            margin-bottom: 1.3rem;
            color: #fff;
            &__close {
                position: absolute;
                display: inline-block;
                right: 0;
                top: 0;
                background: transparent;
                color: inherit;
                font-size: 1.35rem;
                font-weight: bold;
                outline: none;
                border: none;
                padding: .15rem .65rem;
                cursor: pointer;
                opacity: .5;
                transition: opacity .3s ease-in;
                &:hover {
                    opacity: 1;
                }
            }
            &__heading {
                color: inherit;
                font-family: inherit;
                font-size: 1.125rem;
                font-weight: 300;
                line-height: 1.2;
                margin-top: 0;
                margin-bottom: .65rem;
            }
            &.fade-enter-active,
            &.fade-leave-active {
                transition: opacity .5s;
            }
            &.fade-enter,
            &.fade-leave-to {
                opacity: 0;
            }
        }
    }
    @media (min-width: 768px) {
        .notification {
            flex: 0 0 50%;
            max-width: 50%;
        }
    }
    @media (min-width: 992px) {
        .notification {
            flex: 0 0 33.33333%;
            max-width: 33.33333%;
        }
    }
    @media (min-width: 1376px) {
        .notification {
            flex: 0 0 25%;
            max-width: 25%;
        }
    }
</style>

<style lang="css">
    .notification .notification_item a {
        color: inherit;
        text-decoration: underline;
        font-weight: inherit;
    }
</style>
