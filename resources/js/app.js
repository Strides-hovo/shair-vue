


require('./bootstrap');

import { createApp } from 'vue';
import router from "./routes";
import store from './store'
import UiComponents from './components/Ui'
import LanguageMixin from '@mixin/vuex'



const app = createApp({});

UiComponents.forEach(component => {
    app.component(component.name,component)
});

// app.mixin(LanguageMixin)
//app.component()

import SlideUpDown from 'vue3-slide-up-down';
import App from './App.vue';
import FileManager from 'laravel-file-manager'

FileManager.viewType = "grid";

app.component('slide-up-down', SlideUpDown);
app.component('app', App);

app
    .use(router)
    .use(store)
    .use(FileManager, { store })
    .mount("#app");





