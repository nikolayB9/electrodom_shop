import axios from "axios";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

const app = createApp(App)

app.use(router)

axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true
app.config.globalProperties.axios = axios

app.mount('#app')
