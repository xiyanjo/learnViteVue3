<template>
    
  <section>
    <input type="text" v-model="state.des">
  </section>
  <button @click="handleP">孙子组件传值</button>
  <div>f组件的ctotal---{{state.ctotal}}</div>
</template>

<script lang="ts">
// 先引入
import { defineComponent, reactive,inject} from "vue";
export default defineComponent({
  name: "item",
  emits:['handleDes'],
  props:{

  },
  setup(props,{emit}) {
  
    const sos:any = inject('sos');
    // sos.ctotal ='333';//可以在这里改变fff组件中数据
    const state:any = reactive({//返回响应式对象
      des:'写个描述',
      ctotal:sos.ctotal
    });
    const handleP=()=>{
      emit('handleDes',state.des);
    }
    console.log(state)
    return {
      state,
      handleP
    };
  },
  methods: {},
});
</script>
