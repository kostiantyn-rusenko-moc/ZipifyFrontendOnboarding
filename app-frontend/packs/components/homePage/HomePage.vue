<template>
    <div class="bl-home">
        <Header/>
        <div class="bl-home__main">
            <Main/>
        </div>
    </div>
</template>

<script>
    import Header from '../homePage/header/Header.vue'
    import Main from '../homePage/main/Main.vue'

    export default {
        components: {
            Header,
            Main
        }
    }
</script>

<style>
    .bl-home {
        display: flex;
        flex-direction: column;
    }

    .bl-home__main {
        align-self: center;
        width: 100%;
        flex-wrap: wrap;
    }
</style>