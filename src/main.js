import './assets/base.css'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App);
app.use(VueSplide);
app.mount('#app');