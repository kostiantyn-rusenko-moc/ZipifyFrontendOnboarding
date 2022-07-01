<template>
    <div class="bl-main__preview">
        <div :style="{'background-color': form.color}" class="bl-preview__banner"><p>{{form.message}}</p></div>
        <div class="bl-main__skeleton">Add To Card</div>
    </div>
</template>

<script>
    export default {
        props: {
            form: {
                product_id: Number,
                message: '',
                color: String
            },
        }
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
        width: 400px;
        height: 50px;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .bl-main__skeleton {
        width: 400px;
        height: 30px;
        border: 2px solid var(--color-black);
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-weight: 600;
    }
</style>