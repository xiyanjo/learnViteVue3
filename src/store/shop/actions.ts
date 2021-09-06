import { ADD } from './mutationsType';

export default {
  increment({ commit }, payload) {
    commit(ADD,payload);
  }
}