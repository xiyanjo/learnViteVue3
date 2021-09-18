<template>
  <div class="section">
    <h5>组合式API</h5>
    <div>使用ref添加响应式，count---{{count}}</div>

  </div>
  <items msg='111' @handleClick="doClick" />
  <p>fff组件中的ctotal---{{state.ctotal}}</p>
  
  <toast />
</template>

<script lang="ts">
import { defineComponent,ref, reactive ,provide,readonly} from "vue";
import items from "comps/notes/items.vue";
import toast from "comps/toast.vue";
export default defineComponent({
  name: "composeAPI",
  components: {
    items,toast
  },
  computed:{
    
  },
  methods:{
     
  },
  setup() {
    const count = ref(23);
    const state = reactive({
      ctotal: 0,
    });
    const doClick=(val:any)=>{
      state.ctotal =val;
      console.log( 'ff-ctotal---',state.ctotal)
    }
    // readonly 子组件无法改变祖先组件中的数据
    provide('sos',readonly(state));//??当ctotal改变时，item未变化
    return {
      count,
      state,
      doClick,
    };
  },
});
</script>
