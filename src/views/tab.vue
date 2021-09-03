<template>
  <section class="tabs">
    <div v-for="(item, ind) in tabs" :key="ind" @click="changeTab(item)">
      {{ item }}
    </div>
  </section>
  <section class="contents">
    <div>{{ showContent }}</div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "tab",
  components: {},
  data() {
    return {
      tabs: ["tab1", "tab2", "tab3"],
      contents: { tab1: "cont1", tab2: "tab2", tab3: "cont3" },
      showContent: "tab1",
    };
  },
  methods: {
    changeTab(tab) {
      console.log(tab);
      this.showContent = this.contents[tab];
    },
  },
});
</script>
<style lang="less">
.tabs {
  display: grid;
  /* 列的宽度 */
  grid-template-columns: 20% 20% 20%;
  /* 整个内容的水平对齐方式 */
  justify-content: left;
  justify-items: center;
  /* 整个内容的垂直对齐方式 */
  align-content: center;
  box-shadow: 0 0 1px #000;
  /* 行间隔 */
  row-gap: 15px;
  div {
    text-align: center;
    width: 100%;
    background: #fff;
    border: 1px solid #000;
    /* &: hover {
      background-color: aqua;
    } */
  }
  div:hover {
    background-color: aqua;
  }
}
</style>
