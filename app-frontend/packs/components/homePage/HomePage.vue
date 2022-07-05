<template>
    <div class="bl-home">
        <HeaderApp/>
        <div class="bl-home__main">
            <MainApp/>
        </div>
    </div>
</template>

<script>
    import HeaderApp from '../homePage/header/HeaderApp.vue'
    import MainApp from '../homePage/main/MainApp.vue'

    export default {
        components: {
            HeaderApp,
            MainApp
        }
    }
</script>

<style>
    .bl-home {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .bl-home__main {
        align-self: center;
        width: 100%;
        flex-wrap: wrap;
    }
</style>