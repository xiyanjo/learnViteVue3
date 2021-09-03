<template>
  <div v-loading="isloading">{{data+'---isloading:'+isloading}}</div>
  <button @click="update">更新</button>
 
</template>
<script>
import { defineComponent,reactive } from 'vue'
export default defineComponent({
  setup() {
  },
  data(){
    return{
      data:'文字',
      isloading:false,
    }
  },
  directives:{
    loading:{
      mounted(el){
        console.log('el',el)
      },
      updated(el,binding,vnode){
        // 显示遮罩和弹窗
        if(binding.value==true){
          const div = document.createElement('div');
          div.innerText='加载中';
          div.id="toast";
          let style=`position:absolute;left:0;top:0;width:100%;height:100%;display:flex; 
          justify-content: center; align-items: center; background: #ccc;`
          div.setAttribute('style',style);
          document.body.append(div);
          setTimeout(()=>{
            document.body.removeChild(document.querySelector('#toast'));
          },2000)
        }else{
           document.querySelector('#toast')&& document.body.removeChild(document.querySelector('#toast'));
        }
      }
    }
  },
  methods:{
    update(){
      this.isloading=!this.isloading;
      console.log(999,this.isloading);
    },
  },
})
</script>
