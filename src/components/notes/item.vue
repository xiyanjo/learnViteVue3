<template>
  <div class="container"></div>
</template>

<script lang="ts">
    import {
        defineComponent
    } from "vue";
    // import pubSub from "utils/designPattern/publishSubscribeMode.ts";
    export default defineComponent({
        name: "pubSub",
        components: {},
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