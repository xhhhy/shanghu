<template>
  <div class="mycont">
          <div class="title"> <span  @click="back" class="back"><img class="left" src="../../../public/img/6.png" alt=""> </span>项目管理</div>
            <div class="mycontent">
                <div class="tick">项目logo</div>
                <div> <el-input v-model="ruleForm.id" placeholder="请输入项目logo"></el-input></div>
                <div class="tick">商户ID</div>
                <div> <el-input readonly v-model="ruleForm.pass" placeholder="请输入商户ID"></el-input></div>
                <div class="tick">接受地址</div>
                <div> <el-input v-model="ruleForm.pass" placeholder="请输入接受地址"></el-input></div>
                <div class="tick">接受地址</div>
                <div> <el-input v-model="ruleForm.pass" placeholder="请输入接受地址"></el-input></div>
                <div class="tick">IP白名单</div>
                <div> <el-input v-model="ruleForm.pass" placeholder="请输入IP白名单"></el-input></div>
            </div>
            <div class="submitform">确认修改</div>
      


  </div>
</template>

<script>
// @ is an alias to /src
 import Pin from "../../components/pin";

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
      title:"请输入谷歌密码"
    }
  },
  methods:{
    back(){
        this.$router.back(-1)
    }
  }
}
</script>

<style lang="less" scoped>

.mycontent{
        color: white;
        margin: 20px;
        font-size: 14px;
        
}
.tick{
    line-height: 3;
    margin-top: 10px;
}


 



</style>
