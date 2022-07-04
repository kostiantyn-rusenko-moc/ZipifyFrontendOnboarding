<template>
    <div class="bl-editor-container"
        @keyup="getQuill"
        @click="getQuill()">
            <div
                class="bl-editor-container2"
                id="editor-container">
            </div>
    </div>
    <button
        class="bl-editor__clear-btn"
        type="button"
        @click="drawHtml"
        >
            Clear
    </button>
</template>

<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        data() {
            return {
                quill: Object,
                toolbarOptions: [
                    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons

                    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme

                    ['clean']                                         // remove formatting button
                ]
            }
        },
        props: {
            wysiwyg: String,
        },
        methods: {
            editorUp() {
                this.quill = new Quill('#editor-container', {
                    modules: {
                        toolbar: this.toolbarOptions
                    },
                    placeholder: 'Input your banner content here',
                    theme: 'snow'
                });
                this.fetchData()
            },
            getQuill() {
                this.$store.commit('banners/setWysiwygText', this.quill.getText())
                if (this.quill.getText().length < 25) this.$store.commit('banners/setWysiwygHtml', this.quill.root.innerHTML)
            },
            drawHtml() {
                this.$emit('clearPage')
                const value = ''
                const delta = this.quill.clipboard.convert(value)
                this.quill.setContents(delta, 'silent')
                this.getQuill()
            },
            ...mapActions({
                fetchData: "banners/fetchBanners",
            }),

        },
        computed: {
            ...mapState({
                wysiwygText: state => state.banners.wysiwygText,
                wysiwygHtml: state => state.banners.wysiwygHtml
            })
        },
        mounted() {
            this.editorUp()
        },
    }
</script>

<style>
    .bl-editor-container {
        height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .ql-toolbar, .ql-snow {
        width: 90%;

    }

    .bl-editor__clear-btn {
        position: fixed;
        bottom: 20px;
        right: 140px;
        padding: 12px 24px;
        background: none;
        border: 1px solid var(--color-black);
        border-radius: 25px;
        font-size: 20px;
        font-family: "Inter";
        font-weight: 500;
        color: var(--color-black);
    }

    .bl-editor__clear-btn:hover {
        cursor: pointer;
    }
</style>