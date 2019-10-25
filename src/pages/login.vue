<template>
  <div class="login">
    <vue-particle-line>
      <div class="tab flexcol">
        <div class="title">Welcome</div>
        <div class="content flex1">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
            align="center"
          >
            <el-form-item label="用户名" prop="age">
              <el-input v-model.number="ruleForm.age"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click.native="submitForm('ruleForm')">登录</el-button>
              <el-button @click="resetForm('ruleForm')">注册</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </vue-particle-line>
  </div>
</template>

<script>
export default {
  name: "login",
  props: {},
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    submitForm(formName) {
      // this.$refs[formName].validate(valid => {
      //   debugger;
      //   if (valid) {
      //     if (this.ruleForm.age == "admin" && this.ruleForm.checkPass == "admin") {
      //       window.sessionStorage.setItem("loginFlag", "1");
      //       this.$router.push("home");
      //     }
      //   } else {
      //     return false;
      //   }
      // });
      if (this.ruleForm.age == "admin" && this.ruleForm.checkPass == "admin") {
        window.sessionStorage.setItem("loginFlag", "1");
        this.$router.push("home");
      } else {
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.$router.push("resg");
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
>>> .el-form-item__label {
  color: #008ac9;
  font-size: 12px;
}
.login {
  width: 100vw;
  height: 100vh;
  background: rgba(192, 209, 224, 0.19);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.tab {
  width: 500px;
  height: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -250px;
  margin-top: -200px;
  background: #fff;
  z-index: 9999;
  border: 1px solid #696;
  text-align: center;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  -webkit-box-shadow: #666 0px 0px 10px;
  -moz-box-shadow: #666 0px 0px 10px;
  box-shadow: #666 0px 0px 10px;

  .title {
    width: 100%;
    height: 100px;
    line-height: 100px;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    color: #008ac9;
  }

  .demo-ruleForm {
    width: 100%;
    height: 300px;
  }
}

.login ul {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
}
.login ul li {
  list-style-type: none;
  display: block;
  position: absolute;
  bottom: -120px;
  width: 15px;
  height: 15px;
  z-index: -8;
  background-color: rgba(74, 221, 106, 0.85);
  animotion: square 25s infinite;
  -webkit-animation: square 25s infinite;
}
.login ul li:nth-child(1) {
  left: 0;
  animation-duration: 10s;
  -moz-animation-duration: 10s;
  -o-animation-duration: 10s;
  -webkit-animation-duration: 10s;
}
.login ul li:nth-child(2) {
  width: 40px;
  height: 40px;
  left: 10%;
  animation-duration: 15s;
  -moz-animation-duration: 15s;
  -o-animation-duration: 15s;
  -webkit-animation-duration: 15s;
}
.login ul li:nth-child(3) {
  left: 20%;
  width: 25px;
  height: 25px;
  animation-duration: 12s;
  -moz-animation-duration: 12s;
  -o-animation-duration: 12s;
  -webkit-animation-duration: 12s;
}
.login ul li:nth-child(4) {
  width: 50px;
  height: 50px;
  left: 30%;
  -webkit-animation-delay: 3s;
  -moz-animation-delay: 3s;
  -o-animation-delay: 3s;
  animation-delay: 3s;
  animation-duration: 12s;
  -moz-animation-duration: 12s;
  -o-animation-duration: 12s;
  -webkit-animation-duration: 12s;
}
.login ul li:nth-child(5) {
  width: 60px;
  height: 60px;
  left: 40%;
  animation-duration: 10s;
  -moz-animation-duration: 10s;
  -o-animation-duration: 10s;
  -webkit-animation-duration: 10s;
}
.login ul li:nth-child(6) {
  width: 75px;
  height: 75px;
  left: 50%;
  -webkit-animation-delay: 7s;
  -moz-animation-delay: 7s;
  -o-animation-delay: 7s;
  animation-delay: 7s;
}
.login ul li:nth-child(7) {
  left: 60%;
  animation-duration: 8s;
  -moz-animation-duration: 8s;
  -o-animation-duration: 8s;
  -webkit-animation-duration: 8s;
}
.login ul li:nth-child(8) {
  width: 90px;
  height: 90px;
  left: 70%;
  -webkit-animation-delay: 4s;
  -moz-animation-delay: 4s;
  -o-animation-delay: 4s;
  animation-delay: 4s;
}
.login ul li:nth-child(9) {
  width: 100px;
  height: 100px;
  left: 80%;
  animation-duration: 20s;
  -moz-animation-duration: 20s;
  -o-animation-duration: 20s;
  -webkit-animation-duration: 20s;
}
.login ul li:nth-child(10) {
  width: 120px;
  height: 120px;
  left: 90%;
  -webkit-animation-delay: 6s;
  -moz-animation-delay: 6s;
  -o-animation-delay: 6s;
  animation-delay: 6s;
  animation-duration: 30s;
  -moz-animation-duration: 30s;
  -o-animation-duration: 30s;
  -webkit-animation-duration: 30s;
}

@keyframes square {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    bottom: 400px;
    transform: rotate(600deg);
    -webit-transform: rotate(600deg);
    -webkit-transform: translateY(-500);
    transform: translateY(-500);
  }
}
@-webkit-keyframes square {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    bottom: 400px;
    transform: rotate(600deg);
    -webit-transform: rotate(600deg);
    -webkit-transform: translateY(-500);
    transform: translateY(-500);
  }
}

.container {
  width: 60%;
  margin: 0 auto;
}
.container h1 {
  text-align: center;
  color: #ffffff;
  font-weight: 500;
}
.container input {
  width: 320px;
  display: block;
  height: 36px;
  border: 0;
  outline: 0;
  padding: 6px 10px;
  line-height: 24px;
  margin: 32px auto;
  -webkit-transition: all 0s ease-in 0.1ms;
  -moz-transition: all 0s ease-in 0.1ms;
  transition: all 0s ease-in 0.1ms;
}
.container input[type="text"],
.container input[type="password"] {
  background-color: #ffffff;
  font-size: 16px;
  color: #50a3a2;
}
.container input[type="submit"] {
  font-size: 16px;
  letter-spacing: 2px;
  color: #666666;
  background-color: #ffffff;
}
.container input:focus {
  width: 400px;
}
.container input[type="submit"]:hover {
  cursor: pointer;
  width: 400px;
}
</style>
