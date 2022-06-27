import '../styles/application.css';
import App from './App';
import { createApp } from 'vue';
import router from './router';

// Here's your starting point for {javascript, vue} development

const app = createApp(App);

app.use(router)
app.mount(document.querySelector('[data-app]'));
