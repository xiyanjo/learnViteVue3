<template>
  <h1>{{ msg }}</h1>
  <section ref="imgSecion"></section>
  <!-- <img src="../assets/logo.png" alt="" @onload="imgLoad" /> -->
  <!-- <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a
      href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
      target="_blank"
    >
      Vetur
    </a>
    or
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    (if using
    <code>&lt;script setup&gt;</code>)
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p> -->

  <div
    style="height: 100px; background: pink; visibility: hidden; opacity: 0.5"
    @click="alert('8888')"
  >
    <div>我是第一个8888</div>
    <!-- opacity: 1 不生效 -->
    <div style="visibility: visible">我是第二个88888</div>
  </div>
</template>

<script lang="ts">
import {  defineComponent } from "vue";
import "../utils/index.ts";

import imgLoad from "../utils/imgLoad.ts";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  methods: {},
  created() {
    // 一个load的promise;
    // imgLoad("http://localhost:3000/src/assets/logo.png").then((res) => {
    //   console.log("imgres", res, this.$refs.imgSecion);
    //   this.$refs.imgSecion.appendChild(res);
    // });
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
