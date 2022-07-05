import '../styles/application.css';
import App from './App';
import { createApp } from 'vue';
import router from './router';
import store from './store';
import axios from 'axios'
import VueAxios from 'vue-axios'
// import app from './shared/shopifyApp'

// Here's your starting point for {javascript, vue} development

const app = createApp(App);

app.use(router)
app.use(VueAxios, axios)
app.use(store)
// app.use(app)
app.mount(document.querySelector('[data-app]'));
