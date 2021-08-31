<template>
  <div class="container">
    <label>
      请输入您的等级：
      <input type="number" v-model="lever" />
    </label>
    <button @click="notifyLever">发布等级</button>

    <pubsub-son></pubsub-son>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import pubsubSon from "comps/pubsubSon.vue";
import pubSub from "utils/designPattern/publishSubscribeMode.ts";
export default defineComponent({
  name: "pubSub",
  components: { pubsubSon },
  data() {
    return {
      lever: 1,
    };
  },
  methods: {
    notifyLever() {
      pubSub.notify("lever", this.lever);
    },
  },
});
</script>
