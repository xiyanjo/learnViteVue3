import 'utils/index.ts';
import '@/styles/reset.less';

import { createApp } from 'vue';

import App from './App.vue';
import router from './router/index';
import store from './store/index';

const app = createApp(App);
app.use(router).use(store).mount('#app')
// 注册一个全局自定义指令 `v-focus`
// app.directive('loading', {
//   // 当被绑定的元素插入到 DOM 中时……
//   updated(el,binding,vnode) {
//     console.log(el,binding,vnode)
//     // Focus the element
//     // el.focus()
//   }
// })
