<template>
  <div>从state中获取登录信息？---{{islogin}}</div>
  <div v-for="(item,index) in goods" :key="item.id">
    <span>{{item.type}}</span>
     <span>{{item.num}}</span>
    <button @click="increment({index})">+mutations</button>
    <button @click="handleAdd({index})">actions</button>
  </div>
  <br/>
  <div>{{getItemGood[0].type}}</div>
  <br/>
</template>

<script lang="ts">
import { defineComponent, reactive ,provide,readonly} from "vue";
import { mapState,mapMutations ,mapActions } from 'vuex'
export default defineComponent({
  name: "learnVuex",
  components: {
  },
  computed:{
    // 获取store.state 方法一：
    // islogin(){
    //   return this.$store.state.islogin
    // }
    // 获取store.state 方法二：
    ...mapState(['islogin','goods']),
    // 使用getters方法一
    getItemGood(){
      return this.$store.getters.getGoodById(1);
    }
  },
  methods:{
    // 使用mutations方法一
    // increment(index:any){
    //   this.$store.commit({type:'ADD',index});
    // }
    // 使用mutations方法二 传参需要传入一个对象
    ...mapMutations({increment:'ADD'}),
    // 使用actions方法一
    // handleAdd(index){
    //   this.$store.dispatch({type:'increment',index})
    // },
    // 使用actions方法二
    ...mapActions({
      handleAdd: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    })
  },
});
</script>
