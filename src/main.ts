import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import 'styles/reset.less'

const app = createApp(App);
app.use(router).mount('#app')
