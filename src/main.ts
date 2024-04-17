import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Wrapper from './Wrapper.vue'
import router from './router'

const app = createApp(Wrapper)

app.use(router)

app.mount('#app')
