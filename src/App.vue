<template>
  <!-- <header>vue3+ts+vite</header> -->
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <!-- 路由出口 -->
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: "App",
  components: {},
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
