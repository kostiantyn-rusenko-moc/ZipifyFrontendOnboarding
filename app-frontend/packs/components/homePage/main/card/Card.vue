<template>
    <div class="bl-card">
        <div class="bl-card__title">{{card.title}}</div>
        <div 
            class="bl-card__example" 
            :style="{ backgroundColor: card.style.backgoundColor }" 
            v-html="card.content">
        </div>
        <ControlButton
            @click="onClick"
            class="bl-card__settings"/>
        <div
            v-if="isShowControls"
            class="bl-card__controls">
                <BannersControl/>
        </div>
    </div>
    <div
        v-if="isShowBackBlure"
        class="bl-back"
        @click="hideBack">
    </div>
</template>

<script>
    import ControlButton from './controlButton/ControlButton.vue'
    import BannersControl from './controls/BannersControl.vue'
    export default {
        data() {
            return {
                isShowControls: false,
                isShowBackBlure: false
            }
        },
        components: {
            ControlButton,
            BannersControl,
        },
        props: {
            card: {
                type: Object,
            }
        },
        methods: {
            onClick() {
               this.isShowControls = !this.isShowControls
               this.isShowBackBlure = !this.isShowBackBlure
               this.$store.commit('banners/setBannerId',this.card.id)
               this.$store.commit('banners/setBannerTitle', this.card.title)
            },
            hideBack() {
                this.isShowBackBlure = false
                this.isShow = false
            }
        }
    }
</script>

<style>
    .bl-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        position: relative;
        height: 100%;
    }

    .bl-back {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
    }

    .bl-card__title {
        margin-top: 10px;
    }

    .bl-card__example {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
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
        z-index: 500;
    }
</style>