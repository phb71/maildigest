import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import LoadScript from 'vue-plugin-load-script'
import './index.css'

console.log('Firing Vue')

const app = createApp(App)

app.use(LoadScript)
app.use(router).mount('#app')
