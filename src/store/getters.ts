// store的计算属性：从state中派生一些状态
export default {
  goodsObj: (state) => {
    return state.goods;
  },
  getGoodById: (state) => (id)=>{
    return state.goods.filter(item => item.id == id);
  }
};
