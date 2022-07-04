<template>
    <div class="bl-editor-container"
        @keydown="getQuill"
        @click="getQuill">
            <div
                class="bl-editor-container2"
                id="editor-container">
            </div>
    </div>
</template>

<script>
    import {mapActions, mapMutations, mapState} from 'vuex'

    export default {
        data() {
            return {
                quill: Object,
                toolbarOptions: [
                    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript

                    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown

                    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                    [{ 'font': [] }],
                    [{ 'align': [] }],

                    ['clean']                                         // remove formatting button
                ]
            }
        },
        methods: {
            editorUp() {
                this.quill = new Quill('#editor-container', {
                    modules: {
                        toolbar: this.toolbarOptions
                    },
                    placeholder: 'Compose an epic...',
                    theme: 'snow'
                });
            },
            getQuill() {
                this.$store.commit('banners/setWysiwygText', this.quill.getText())
                this.$store.commit('banners/setWysiwygHtml', this.quill.root.innerHTML)
                console.log(this.wysiwygHtml)
            },
            drawHtml() {
                const d = document.querySelector('[data-preview]');
                console.log(d)
            },
            ...mapActions({
                fetchData: "banners/fetchBanners",
            }),
            ...mapMutations({
                setWysiwygText: 'banners/setWysiwygText',
                setWysiwygHtml: 'banners/setWysiwygHtml'

            })
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
</style>