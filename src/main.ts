import { createApp, type Plugin } from 'vue'
import App from './App.vue'

import './styles/global.scss'
import 'uno.css'

const app = createApp(App)

// install all modules
Object.values(
  import.meta.glob<Plugin>('./modules/*.ts', { eager: true }),
).forEach((m) => app.use(m))

app.mount('#app')
