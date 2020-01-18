<template>
  <div class="home">
          <div class="homehead"><img src="../../public/img/1.png" alt="" srcset=""></div>
          <div class="homeform">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="" prop="id">
                  <el-input v-model="ruleForm.id" placeholder="商户ID"></el-input>
                </el-form-item>
                   <el-form-item label="" prop="name">
                  <el-input v-model="ruleForm.name" placeholder="用户名"></el-input>
                </el-form-item>
                   <el-form-item label=""  prop="pass">
                  <el-input v-model="ruleForm.pass" placeholder="登录密码"></el-input>
                </el-form-item>
                  <el-form-item label="" >
                 <div @click="backpass" class="backpass">找回密码</div>
                </el-form-item>
                  <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
              </el-form-item>
              </el-form>
          </div>
            <el-drawer
          :visible.sync="drawer"
          direction="btt"
          :with-header="false">
          <Pin @submit="submit" 
          :title="title" />
        </el-drawer>


  </div>
</template>

<script>
// @ is an alias to /src
 import Pin from "../components/pin";

export default {
  name: 'home',
  components: {
    Pin
  },
  data(){
    return{
      ruleForm:{
        id:"",
        name:"",
        pass:"",
      },
        drawer:false,
      rules:{
      id: [{ required: true, message: '请输入id', trigger: 'blur' }, {  trigger: 'blur' } ],
      name: [{ required: true, message: '请输入用户名', trigger: 'blur' }, {  trigger: 'blur' } ],
      pass: [{ required: true, message: '请输入登录密码', trigger: 'blur' }, { trigger: 'blur' } ],

      },
      title:"请输入谷歌密码"
    }
  },
  methods:{
  
     submitForm(formName) {
       let that =this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            that.drawer=true
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      backpass(){
        alert("联系客服找回登录密码")
      },
      submit(pwd){
          console.log("submit")
          this.$router.push("index")
      }
  }
}
</script>

<style lang="less" scoped>
.home{
  height: 100vh;
    background: url("../../public/img/23.png");
    background-size: 100%  61%;
    background-repeat: no-repeat;
}

 



</style>
