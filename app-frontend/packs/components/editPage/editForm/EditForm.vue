<template>
    <div class="bl-editor-container" id="editor-container">
    </div>
    <button type="button" @click="getQuill">Get</button>
</template>

<script>
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
                    theme: 'snow'  // or 'bubble'
                });
            },
            getQuill() {
                console.log(this.quill.root.innerHTML)
            }
        },
        mounted() {
            this.editorUp()
        }
    }
</script>

<style>
    .bl-editor-container {
        width: 90%;
    }

    .ql-toolbar, .ql-snow {
        width: 90%;
    }
</style>