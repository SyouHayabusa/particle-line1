<template>
  <div id="app" v-cloak>
    <transition enter-active-class="animated fadeInDownBig" leave-active-class="animated bounce">
      <vue-particle-line>
        <router-view v-if="!this.$route.meta.needLogin" />
      </vue-particle-line>
    </transition>
    <transition enter-active-class="animated fadeInDownBig">
      <router-view v-if="this.$route.meta.needLogin"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
#app {
  font-family: Helvetica, "Hiragino Sans GB", "Microsoft Yahei", "微软雅黑",
    Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  min-height: 1000;
  // background: url("~@images/map.png") no-repeat;
  // background-size: 100% 100%;
  // opacity: 0.1;
}
</style>
