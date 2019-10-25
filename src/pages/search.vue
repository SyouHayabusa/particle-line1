<template>
  <div class="home Cover flexcol">
    <HeaderCom></HeaderCom>
    <div class="zls-bar flexrow">
      <ul>
        <li class="first current">
          <div>
            <i class="l"></i>航班查询
            <i class="r"></i>
          </div>
        </li>
        <li class>
          <div>
            <i class="l"></i>航班选择
            <i class="r"></i>
          </div>
        </li>
        <li class>
          <div>
            <i class="l"></i>旅客信息
            <i class="r"></i>
          </div>
        </li>
        <li class>
          <div>
            <i class="l"></i>支付订单
            <i class="r"></i>
          </div>
        </li>
        <li class>
          <div>
            <i class="l"></i>完成支付
            <i class="r"></i>
          </div>
        </li>
      </ul>
    </div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="起始地">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="结束地">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <div class="block">
        <el-date-picker
          v-model="value2"
          type="datetimerange"
          :picker-options="pickerOptions"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          align="right"
        ></el-date-picker>
      </div>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <main class="main-content flex1 content-container"></main>
    <FooterCom></FooterCom>
  </div>
</template>

<script>
export default {
  name: "",

  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
</style>
