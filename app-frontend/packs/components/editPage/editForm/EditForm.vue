<template>

    <div class="bl-editor-container" id="editor-container">
    </div>
</template>

<script>
    export default {
        methods: {
            editorUp() {
                var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
];
                var quill = new Quill('#editor-container', {
  modules: {
    toolbar: toolbarOptions
  },
  placeholder: 'Compose an epic...',
  theme: 'snow'  // or 'bubble'
});
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