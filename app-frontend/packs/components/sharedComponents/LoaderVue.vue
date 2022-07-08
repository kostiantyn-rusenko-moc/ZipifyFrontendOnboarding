<template>
    <div class="bl-blur">
        <div class="bl-loader"/>
    </div>
</template>

<script>
    export default {
        name: 'LoaderVue',
    }
</script>

<style>
    .bl-blur {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(5px);
    }

    .bl-loader {
        position: fixed;
        top: 45%;
        left: 45%;
        border: 16px solid var(--color-grey);
        border-radius: 50%;
        border-top: 16px solid var(--color-header);
        width: 120px;
        height: 120px;
        -webkit-animation: spin 2s linear infinite; /* Safari */
        animation: spin 2s linear infinite;
        z-index: 1000;
    }

    /* Safari */
    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>