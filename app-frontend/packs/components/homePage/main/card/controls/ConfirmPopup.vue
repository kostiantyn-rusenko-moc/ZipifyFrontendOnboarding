<template>
    <div class="bl-popup">
        <button
            @click="$emit('closePopup')"
            type="button"
            class="bl-popup__close-btn">
                <svg width="53" height="50" viewBox="0 0 53 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.75 12.5L13.25 37.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.25 12.5L39.75 37.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
        </button>
        <div class="bl-popup__message">
            Your Banner {{this.$store.state.banners.bannerTitle}} will be deleted.
        </div>
        <button 
            type="button" 
            class="bl-popup__del-btn"
            @click="deleteBanner"
            >
                delete
        </button>
    </div>
</template>

<script>
    export default {
        methods: {
            deleteBanner() {
                this.$store.dispatch('banners/deleteBanner')
                this.$emit('closePopup')
            }
        }
    }
</script>

<style>
    .bl-popup {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 500px;
        height: 300px;
        background-color: var(--color-white);
        border: 1px solid var(--color-grey);
        border-radius: 5px;
        box-shadow: 0 4px 4px rgba(217, 217, 217, 0.25);
        z-index: 500;
    }

    .bl-popup__close-btn {
        position: absolute;
        top: 0;
        right: 0;
        background: none;
        border: none;
    }

    .bl-popup__close-btn:hover {
        cursor: pointer;
    }

    .bl-popup__message {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        font-family: 'Inter';
    }

    .bl-popup__del-btn {
        position: absolute;
        bottom: 20px;
        padding: 12px 24px;
        border: none;
        border-radius: 25px;
        background-color: var(--color-red);
        color: var(--color-white);
        font-size: 24px;
        font-family: 'Inter';
        text-transform: uppercase;
    }

    .bl-popup__del-btn:hover {
        cursor: pointer;
    }
</style>