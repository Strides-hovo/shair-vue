require('./bootstrap');

import {createApp} from 'vue';
import router from "./routes/routes";
import store from './store'
import UiComponents from './components/Ui'
import SlideUpDown from 'vue3-slide-up-down';
import App from './App.vue';
import FileManager from 'laravel-file-manager'


const app = createApp({});

UiComponents.forEach(component => {
    app.component(component.name, component)
});


app.component('slide-up-down', SlideUpDown);
app.component('app', App);

app
    .use(router)
    .use(store)
    .use(FileManager, {store})
    .mount("#app");





