<template>
  <div class="home">
          <div class="homehead"><img src="../../public/img/1.png" alt="" srcset=""></div>
          <div class="login"> 登录</div>
           <div class="userlogin"> 
              <el-input v-model="name" placeholder="请输入用户名"></el-input>
              <el-input v-model="pass" placeholder="请输入密码"></el-input>
           </div>
           <router-link to="changepass"><div class="loosepass">忘记密码?</div></router-link> 
          <div class="subbmit">登录</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data(){
    return{
        id:"",
        name:"",
        pass:"",
    }
  },
  methods:{

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
    background-size: 100%  100%;
    background-repeat: no-repeat;
}

 



</style>
