import {
  createRouter,
  createWebHistory,
} from 'vue-router';

const routes = [
  {
    path: "/",
    redirect: "/pubSub",
  },
  {
    path: "/",
    component: () => import("comps/leftMenu/menu.vue"),
    children: [
      {
        path: "pubSub",
        name: 'pubSub',
        component: () => import("../views/pubSub.vue"),
      },{
        path: "waterFlow",
        name: 'waterFlow',
        component: () => import("../views/waterFlow.vue"),
      },{
        path: "tab",
        name: 'tab',
        component: () => import("../views/tab.vue"),
      },{
        path: "noteIndex",
        name: 'noteIndex',
        component: () => import("../views/noteIndex.vue"),
      }
    ]
  },
  
];
// 3. 创建路由实例并传递 `routes` 配置

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(), //createWebHashHistory
  routes, // `routes: routes` 的缩写
});
export default router;
