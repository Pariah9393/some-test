import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { store } from './store';

const app = createApp(App).use(VueAxios, axios);

app.use(store);

app.mount('#app');
