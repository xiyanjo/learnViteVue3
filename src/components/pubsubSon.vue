<template>
  <div>我是来自父元素的等级：{{ lever }}</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import pubSub from "../utils/designPattern/publishSubscribeMode.ts";
export default defineComponent({
  name: "pubsobSon",
  data() {
    return {
      lever: 0,
    };
  },
  methods: {
    changseLever(val) {
      this.lever = val;
    },
    addLeverListen() {
      pubSub.add("lever", this.changseLever);
    },
  },
  mounted() {
    this.addLeverListen();
  },
});
</script>
