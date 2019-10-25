<template>
  <transition name="el-fade-in">
    <el-button type="primary" class="page-up" @click.stop="backTop">返回顶部</el-button>
  </transition>
</template>

<script>
export default {
  name: "",

  props: {},
  data() {
    return {
      btnFlag: true
    };
  },
  computed: {},
  created() {},
  mounted() {
    // window.addEventListener("scroll", this.scrollToTop);
  },
  watch: {},
  methods: {
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },

    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      // const that = this;
      // let scrollTop =
      //   window.pageYOffset ||
      //   document.documentElement.scrollTop ||
      //   document.body.scrollTop;
      // that.scrollTop = scrollTop;
      // if (that.scrollTop > 60) {
      //   that.btnFlag = true;
      // } else {
      //   that.btnFlag = false;
      // }
    }
  },
  components: {},
  destroyed() {
    // window.removeEventListener("scroll", this.scrollToTop);
  }
};
</script>

<style scoped lang="scss">
.page-up {
  background-color: #409eff;
  position: fixed;
  right: 50px;
  top: 50%;
  cursor: pointer;
  z-index: 8888;
}
</style>
