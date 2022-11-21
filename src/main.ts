import { createApp } from 'vue'
import './assets/styles/main.scss'
import App from './App.vue'
import store from './store'
import router from './router'
import "virtual:svg-icons-register";

const app = createApp(App);
app.use(store)
app.use(router)
app.mount('#app')