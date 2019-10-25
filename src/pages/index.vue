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
        <li class="current">
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
    <el-form :inline="true" :model="form" class="demo-form-inline flexrow">
      <el-form-item label="起始地">
        <!-- <el-input v-model="formInline.user" placeholder="请选择起始地"></el-input> -->
        <el-cascader
          :options="areaSelectData"
          :change-on-select="true"
          :clearable="true"
          :filterable="true"
          @change="handleChange"
          class="full-width"
          size="medium"
          v-model="form.selectedOptions"
        />
      </el-form-item>
      <el-form-item label="结束地">
        <!-- <el-input v-model="formInline.user" placeholder="请选择结束地"></el-input> -->
        <el-cascader
          :options="areaSelectData"
          :change-on-select="true"
          :clearable="true"
          :filterable="true"
          @change="handleChange"
          class="full-width"
          size="medium"
          v-model="form.selectedOptions1"
        />
      </el-form-item>
      <el-form-item>
        <el-date-picker
          v-model="value2"
          type="datetimerange"
          :picker-options="pickerOptions"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          align="right"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <main class="main-content flex1 content-container">
      <el-table
        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        border
        style="width: 100%; text-align:center"
        align="center"
        fixed
        height="800"
      >
        <el-table-column align="center" prop="info" label="航班信息"></el-table-column>
        <el-table-column align="center" prop="opendate" label="起飞时间"></el-table-column>
        <el-table-column align="center" prop="overdate" label="到达时间"></el-table-column>
        <el-table-column align="center" prop="topdeng" label="头等舱"></el-table-column>
        <el-table-column align="center" prop="common" label="公务舱"></el-table-column>
        <el-table-column align="center" prop="less" label="经济舱"></el-table-column>
        <el-table-column align="center" fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small" @click.stop="dialogFormVisible = false">订购</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block flexrow" style="height:80px;line-height:80px;padding-top:20px;">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[20, 30, 35, 40]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>
      <section>
        <el-dialog class="dialog" title="航班详情" :visible.sync="dialogFormVisible" center>
          <div class="dislog-title">C7-88</div>
          <el-form ref="form" :model="sizeForm" label-width="1F40px" size="mini">
            <el-form-item label="开始时间：">2019-09-10</el-form-item>
            <el-form-item label="结束时间:">2019-10-10</el-form-item>
            <el-form-item label="特殊资源:">
              <el-radio-group v-model="sizeForm.resource" size="medium">
                <el-radio border label="头等舱"></el-radio>
                <el-radio border label="公共舱"></el-radio>
                <el-radio border label="经济舱"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click.stop="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary">选 择</el-button>
          </div>
        </el-dialog>
      </section>
    </main>
    <FooterCom></FooterCom>
  </div>
</template>

<script>
import { regionData, CodeToText, TextToCode } from "element-china-area-data";
export default {
  name: "",

  props: {},
  data() {
    return {
      sizeForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      currentPage: 1,
      total: 0,
      pagesize: 10,
      areaSelectData: regionData, // options绑定的数据就是引入的 regionData
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: "",
      form: {
        selectedOptions: "",
        selectedOptions1: ""
      },
      tableData: [
        {
          info: "C7-88",
          opendate: "王小虎",
          overdate: "上海",
          topdeng: 3500,
          common: 2500,
          less: 2000
        }
      ],
      dialogFormVisible: false
    };
  },
  computed: {},
  created() {
    // for (let i = 0; i < 6; i++) {
    //   // this.tableData = this.tableData.concat(this.tableData);
    // }
    this.total = this.tableData.length;
  },
  mounted() {},
  watch: {},
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleClick(row) {
      // console.log(row);
      this.dialogFormVisible = true;
    },
    onSubmit() {
      console.log("submit!");
    },
    handleChange() {
      // form.selectedOptions是地址数组，分别对应省市区，下面的操作是将数组转变为字符串保存，如果不需要以字符串形式保存，可以忽略
      this.form.province = this.form.selectedOptions[0];
      this.form.city = this.form.selectedOptions[1];
      this.form.area = this.form.selectedOptions[2];
      if (this.form.province !== undefined) {
        this.buildSurveyData.damRegisterOne.constructionPlace =
          CodeToText[this.form.province] + " ";
      }
      if (this.form.city !== undefined) {
        this.buildSurveyData.damRegisterOne.constructionPlace +=
          CodeToText[this.form.city] + " ";
      }
      if (this.form.area !== undefined) {
        // 拼接公司详细地址
        this.buildSurveyData.damRegisterOne.constructionPlace +=
          CodeToText[this.form.area] + " ";
      }

      // 由于上面将地址转为了字符串，所以在加载页面获取数据时，要重新将字符串转为数组。下面是对数据的处理
      if (this.buildSurveyData.damRegisterOne.constructionPlace) {
        let address = this.buildSurveyData.damRegisterOne.constructionPlace.split(
          " "
        );
        // 省份
        this.form.selectedOptions.push(TextToCode[address[0]].code);
        // 城市
        let cityCode = TextToCode[address[0]][address[1]].code;
        this.form.selectedOptions.push(cityCode);
        // 地区
        let areaCode = TextToCode[address[0]][address[1]][address[2]].code;
        this.form.selectedOptions.push(areaCode);
      }
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.dislog-title {
  height: 50px;
  line-height: 50px;
  font-size: 15px;
  font-weight: 600;
}
.main-content {
  width: 100%;
  min-height: 600px;
  text-align: center;
}

.demo-form-inline {
  z-index: 9999;
  width: 100%;
}

>>> .el-pagination {
  flex: 1;
  // height: 80px;
  // line-height: 80px;
}
</style>
