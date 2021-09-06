import { ADD } from './mutationsType';

export default {
  // 使用常量替代 Mutation 事件类
  [ADD](state, payload) {
    state.goods[payload.index].num++;
  }
}