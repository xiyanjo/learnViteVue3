import actions from './actions';
import getters from './getters.ts';
import mutations from './mutations';

export default {
  state:{
    islogin:true,
    goods: [
      { id: 1, type: 'apple',num:1 },
      { id: 2, type: 'andro' ,num:1},
      { id: 3, type: 'xiaomi',num:1 },
      { id: 4, type: 'heiehie' ,num:1},
    ]
   },
  getters,
  mutations,
  actions
}