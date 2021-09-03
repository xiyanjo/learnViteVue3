<template>
  <div class="menu-box">
    <ul>
      <li
        v-for="item in menus"
        :key="item.name"
        :class="{ active: item.name == routerName }"
        @click="toPage(item)"
      >
        {{ item.name }}
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import menus from "@/mock/menuMock.js";
export default defineComponent({
  name: "leftMenu",
  data() {
    return {
      menus: menus,
    };
  },
  computed:{
    // 获取当前所在位置
    routerName(){
      return this.$route.name||'pubSub';
    }
  },
  methods: {
    // 判断跳转路由/网页，当前路由名称高亮显示
    toPage(item) {
      if (item.path.indexOf("http") != -1) location.href = item.path;
      this.$router.push(item.path);
    },
  },
  created() {},
});
</script>
<style lang="less" scoped>
.menu-box {
  position: relative;
  padding-left: 200px;
  height: 100%;
  overflow: hidden;
  ul {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: #cccccc47;
    width: 200px;
    padding: 5px 0;
    overflow: auto;
    li {
      margin: 5px 0;
      padding: 5px 10px;
      &:hover {
        color: cornflowerblue;
      }
    }
    .active {
      color: cornflowerblue;
    }
  }
}
</style>
