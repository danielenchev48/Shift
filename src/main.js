import './assets/base.css'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowRight)

import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App);
app.use(VueSplide);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');