import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import store from './store/index.js';
// import {library} from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
//import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//import {user} from '@fortawesome/free-solid-svg-icons'
//import Vuetify from 'vuetify'

// library.add(fas,far,fab)
// Vue.use(Vuetify)

var app = createApp(App)
	//.component('font-awesome-icon',FontAwesomeIcon)
	.use(router)
	.use(store);

app.config.globalProperties.$axios = axios;
app.mount('#app');
