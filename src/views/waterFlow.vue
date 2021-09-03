<template>
  <section>
    <div ref="fowBox" class="flow-box" @click="getImg" @scroll="scroll"></div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { flow, isLast } from "utils/used/flow.ts";
export default defineComponent({
  name: "waterFlow",
  // components: { pubsubSon },
  data() {
    return {};
  },
  methods: {
    getImg() {
      this.$nextTick(() => {
        flow(this.$refs.fowBox, 200);
      });
    },
    scroll() {
      let el = document.querySelectorAll("img");
      isLast(this.$refs.fowBox, 200, el[el.length - 1]);
    },
  },
  mounted() {
    this.getImg();

    this.$refs.fowBox.onscroll = function () {};
  },
});
</script>
<style lang="less" scoped>
section {
  .flow-box {
    height: 100%;
    overflow: auto;
    position: relative;
    background: rgb(142, 197, 223);
  }
}
</style>
