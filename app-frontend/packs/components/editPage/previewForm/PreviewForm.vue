<template>
    <div class="bl-main__preview">
        <div
            :style="{'background-color': this.$store.state.banners.bannerColor}"
            class="bl-preview__banner"  v-html="wysiwygHtml">
        </div>
        <div class="bl-main__skeleton">
            Add To Card
        </div>
    </div>
</template>

<script>
    import { mapState} from 'vuex'

    export default {
        computed: {
            ...mapState ({
                wysiwygHtml: state => state.banners.wysiwygHtml
            })
        },
    }
</script>

<style>
    .bl-main__right{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .bl-preview__banner {
        width: 345px;
        height: 50px;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .bl-main__skeleton {
        width: 345px;
        height: 50px;
        border: 2px solid var(--color-black);
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-weight: 600;
    }
</style>