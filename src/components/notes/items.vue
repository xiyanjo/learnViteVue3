<template>
  <section>
    <h5>在setup中 添加响应式属性，添加方法</h5>
    <div>{{ state }}</div>
    <input type="text" v-model="state.num1" @blur="addNum"> +
    <input type="text" v-model="state.num2" @blur="addNum">=
    <input type="text" v-model="state.total">
  </section>
  <section>
    <h5>在setup中  使用computed</h5>
    <input type="text" v-model="state.cnum1"  > +
    <input type="text" v-model="state.cnum2"  >=ff组件从total：
    <input type="text" v-model="state.ctotal">
  </section>
  <button @click="handleF">子组件传值</button>

  <item @handleP="doDes" />
</template>

<script lang="ts">
// 先引入
import item from 'comps/notes/item.vue'
import { defineComponent, reactive, computed ,onMounted,onUpdated,ref } from "vue";
export default defineComponent({
  name: "items",
  emits:['handleClick'],
  props:{

  },
  components: {item},
  setup(props,{emit}) {
    // const v = ref(0); //返回响应式 //v.value为使用的值
    // return { v };
    const state:any = reactive({//返回响应式对象
      data:{id:'11'},
      num1: 1,
      num2:1,
      total:0,
      // computed使用
      cnum1: 1,
      cnum2:1,
      ctotal:computed(()=>Number(state.cnum1)+Number(state.cnum2))
    });
    // 计算total
    const addNum = ()=>{
      state.total=Number(state.num1)+Number(state.num2);
    }
    // 监听子组件方法
    const doDes=(val:any)=>{
        console.log(val)
    }
    // 向父组件emit的方法
    const handleF=()=>{
      emit('handleClick',state.ctotal);
    }

    // 生命周期
    onMounted(()=>{
      console.log('onMounted');
    })
    onUpdated(()=>{
      console.log('onUpdated');
    })
    return {
      state,
      addNum,doDes,
      handleF,
      
    };
  },
  methods: {},
});
</script>
