<template>
    <div></div>
    <div class="bl-card">
        <div class="bl-card__title">{{card.title}}</div>
        <div class="bl-card__example">{{card.content}}</div>
        <ControlButton @click="onClick" class="bl-card__settings"/>
        <div v-if="isShow" class="bl-card__controls">
            <BannersControl/>
        </div>
    </div>

</template>

<script>
    import ControlButton from './controlButton/ControlButton.vue'
    import BannersControl from './controls/BannersControl.vue'
    export default {
        data() {
            return {
                isShow: false,
            }
        },
        components: {
            ControlButton,
            BannersControl,
        },
        props: {
            card: {
                // type: Object
                title: String,
                content: String,
            }
        },
        methods: {
            onClick() {
               this.isShow = !this.isShow
            }
        }
        
    }
</script>

<style>
    .bl-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

    .bl-card__title {
        margin-top: 10px;
    }

    .bl-card__example {
        margin-top: 100px;
    }

    .bl-card__settings {
        position: absolute;
        top: 0;
        right: 0;
    }

    .bl-card__controls {
        position: absolute;
        top: 0;
        right: 30px;
    }
</style>