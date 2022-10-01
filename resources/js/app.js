


require('./bootstrap');

import {createApp} from 'vue';
import router from "./routes/routes";
import store from './store'
import UiComponents from './backend/components/UI'
import SlideUpDown from 'vue3-slide-up-down';
import App from './App.vue';
import VueLazyLoad from 'vue3-lazyload'
import {_lang, _translate} from "./filters/localize";

import helpers from './helpers'
import BaseMetaInfo from '@frontend/components/BaseMetaInfo'



const app = createApp({});

app.config.globalProperties.BackendErrorHandler = helpers.BackendErrorHandler

/**
 * @example {{ $trans._lang('mobile_sidebar') }}
 * @type {{_lang: ((function(*): *)|*)}}
 */

app.config.globalProperties.$trans = {
    _lang,_translate
}
UiComponents.forEach(component => {
    app.component(component.name, component)
});

// app.config.devtools = true;

app.component('base-meta-info', BaseMetaInfo);
app.component('slide-up-down', SlideUpDown);
app.component('app', App);

app
    .use(router)
    .use(VueLazyLoad)
    .use(store)
    .mount("#app");






