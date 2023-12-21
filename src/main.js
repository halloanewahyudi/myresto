import { createApp } from 'vue'
import { createPinia } from 'pinia'
import  BootstrapIcons from 'bootstrap-icons/font/bootstrap-icons.min.css'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
app.use(BootstrapIcons)
app.use(createPinia())
app.use(router)

app.mount('#app')
