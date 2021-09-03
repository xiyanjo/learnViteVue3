<template>
  <div class="container">
    <h5>便签功能</h5>
  </div>
</template>

<script lang="ts">
    import {
        defineComponent
    } from "vue";
    import pubsubSon from "comps/pubsubSon.vue";
    import pubSub from "utils/designPattern/publishSubscribeMode.ts";
    export default defineComponent({
        name: "pubSub",
        components: {
            pubsubSon,
        },
        data() {
            return {
                // lever: 1,
            };
        },
        methods: {},
    });
</script>