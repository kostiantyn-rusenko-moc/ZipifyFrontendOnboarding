<template>
    <router-link to="/Edit" 
        class="bl-btn__link bl-link">
            <button 
                class="bl-create-btn bl-btn" 
                type="button">
                    Create new banner
            </button>
    </router-link>
</template>

<script>
</script>

<style>
    .bl-create-btn {
        font-size: 14px;
        font-weight: 600;
        font-family: 'Inter';
        color: var(--color-black);
        background-color: var(--color-white);
        border-radius: 25px;
        padding: 16px 24px;
    }

    .bl-create-btn:hover {
        box-shadow: 0px 5px 7px var(--color-dark-grey);
        border: .2px solid #b3b3b3;
    }

    .bl-btn__link {
        padding: 16px 0;
        border-radius: 25px;
    }
</style>
