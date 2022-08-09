require('./bootstrap');

import {createApp} from 'vue';
import router from "./routes/routes";
import store from './store'
import UiComponents from './backend/components/UI'
import SlideUpDown from 'vue3-slide-up-down';
import App from './App.vue';
import VueLazyLoad from 'vue3-lazyload'
// import FileManager from 'laravel-file-manager'

import helpers from './helpers'
import BaseMetaInfo from '@frontend/components/BaseMetaInfo'

// console.log( helpers.SET_ADMIN_LANGUAGE_ID(2) )

const app = createApp({});

app.config.globalProperties.BackendErrorHandler = helpers.BackendErrorHandler
// app.config.globalProperties.ADMIN_LANGUAGE_ID = helpers.GET_ADMIN_LANGUAGE_ID
// app.config.globalProperties.SET_ADMIN_LANGUAGE_ID = helpers.SET_ADMIN_LANGUAGE_ID


UiComponents.forEach(component => {
    app.component(component.name, component)
});


app.component('base-meta-info', BaseMetaInfo);
app.component('slide-up-down', SlideUpDown);
app.component('app', App);

app
    .use(router)
    .use(VueLazyLoad)
    .use(store)
    // .use(FileManager, {store})
    .mount("#app");





