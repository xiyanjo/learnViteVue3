import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import "utils/index.ts";

import '@/styles/reset.less'

const app = createApp(App);
app.use(router).mount('#app')
