<template>
  <div id="headerCover" class="flexrow">
    <div class="logo flexrow">
      <div class="D-back">
        <el-button type="danger" style="margin-right:80px">返回</el-button>
      </div>
      <div class="logoimg">&nbsp;</div>
    </div>
    <div class="content flex1 flexcol">
      <div class="layout">
        <span class="layoutbtn" @click.stop="layout">退出登录</span>
      </div>
      <div class="liucheng">
        <!-- <slot name="speed"></slot> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headername",

  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    layout() {
      window.sessionStorage.clear();
      this.$router.push("login");
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
#headerCover {
  width: 100%;
  height: 120px;
  line-height: 120px;
  background: #fff;
}

.logo {
  width: 40%;
  height: 100px;
  line-height: 100px;
  cursor: pointer;
}

.content {
  height: 100px;
  line-height: 50px;
  .layout {
    font-size: 16px;
    color: #fff;
    padding-right: 40px;
    width: 100%;
    .layoutbtn {
      display: inline-block;
      width: 120px;
      height: 50px;
      background: #008ac9;
      position: absolute;
      right: 80px;
      text-align: center;
      border-radius: 4px;
      cursor: pointer;
    }
  }
  .liucheng {
    font-size: 26px;
    color: black;
    font-weight: 600;
  }
}

.logoimg {
  background: url("~@images/alertlogo.jpg") no-repeat;
  background-size: 100% 100%;
  width: 196px;
  height: 40px;
}
</style>
