import { createStore } from 'vuex';

// import actions from './actions';
// import getters from './getters.ts';
// import mutations from './mutations';
import shop from './shop/index';

export default createStore({
  state:{
    islogin:true,
    goods: [
      { id: 1, type: 'apple',num:1 },
      { id: 2, type: 'andro' ,num:1},
      { id: 3, type: 'xiaomi',num:1 },
      { id: 4, type: 'heiehie' ,num:1},
    ]
   },
  // 从store中的state中派生状态,像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算
  // getters,
  /**mutation
   * 更改 Vuex 的 store 中的状态的唯一方法
   * 每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)
   * 可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）
   * mutation 必须是同步函数
   */
  // mutations,
  /**Action
   * Action 提交的是 mutation，而不是直接变更状态。
   */
  // actions,
  modules: {
    shop
   }
})