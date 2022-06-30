<template>
    <div class="bl-control__menu">
        <li class="bl-menu__list">
            <div class="bl-list__item">
                <router-link class="bl-item__edit-link" to="/Edit">
                    <button type="button" class="bl-item__btn">Edit</button>
                </router-link>
            </div>
            <div class="bl-list__item">
                <button @click="showPopup()" type="button" class="bl-item__btn">Delete</button>
            </div>
        </li>
    </div>
    <div v-if="isShowPopup" class="bl-confirm-popup">
        <ConfirmPopup  @closePopup="showPopup"/>
    </div>
    <div v-if="isShowPopup" @click="showPopup" class="bl-global"></div>
    <div v-if="isShowControls" @click="showPopup" class="bl-global"></div>
</template>

<script>
    import ConfirmPopup from "./ConfirmPopup.vue";

    export default {
        data() {
            return {
                isShowPopup: false,
           }
        },
        methods: {
            showPopup(event) {
                this.isShowPopup = !this.isShowPopup
                this.$emit('clicked', 'someValue')
            },
        },
        components: {
            ConfirmPopup,
        }
    }
</script>

<style>
    .bl-global {
        position: fixed;
        background-color: #000;
        opacity: 0.4;
        min-width: 100%;
        min-height: 100%;
        top: 0;
        left: 0;
    }

    .bl-menu__list {
        display: flex;
        flex-direction: column;
        align-items: center;
        list-style-type: none;
        width: 100px;
        border-radius: 10px;
        padding: 0;
        background-color: var(--color-white);
        border: 1px solid var(--color-grey);
        box-shadow: 0px 3px 4px var(--color-dark-grey);
    }

    .bl-list__item {
        display: flex;
        justify-content: center;
        border-bottom: 1px solid var(--color-grey);
        width: 95%;
    }

    .bl-list__item:last-child {
        border-bottom: 0;
    }

    .bl-list__item:hover {
        cursor: pointer;
        border-radius: 10px;
        background-color: var(--color-dark-grey);
    }

    .bl-item__btn {
        background: none;
        border: none;
        padding: 8px 0;
        width: 100%;
    }

    .bl-item__btn:hover {
        cursor: pointer;
        color: var(--color-white);
    }

    .bl-item__edit-link {
        width: 100%;
        text-align: center;
    }

    .bl-confirm-popup {
        position: fixed;
        top: 30%;
        left: 35%;
        z-index: 500;
    }
</style>