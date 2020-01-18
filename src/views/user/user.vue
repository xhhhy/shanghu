<template>
  <div class="user">
    <div class="userhead">
      <div class="usemsg">
        <div class="userfoto"><img src="../../../public/img/7.png" alt=""></div>
        <div class="usercont">
          <div class="username">
            JSASAN
          </div>
          <div class="userid">
            ID: 1000001
          </div>
          <div class="userid">
            x******6 (超级管理员）
          </div>
        </div>
      </div>
    </div>
    <div class="usermune">
      <div class="nunelist">
       <router-link v-for="(item,i) in List" :key="i" :to="item.to">
           <div class="nume">
                    <el-row>
                    <el-col :span="2"><div class="userimg"><img :src="item.img" alt=""></div></el-col>
                    <el-col :span="16"><div class="grid-content">{{item.name}}</div></el-col>
                    <el-col :span="6"><div class="grid-content"> <div class="userto">{{item.set}} <img src="../../../public/img/30.png" alt=""></div></div></el-col>
                </el-row>
            </div>
        </router-link>
      </div>
    </div>
    <navfoot />
  </div>
</template>
<script>
// @ is an alias to /src
// import Api from "../../Api/Api"
import navfoot from "../../components/mav.vue";
import jsBridge from "../../assets/bird.js"

export default {
  name: 'index',
  components:{
    navfoot
  },
  data(){
    return{
        List:[
            {to:"mycont" ,img:require("../../../public/img/29.png"),name:"项目管理",set:"" },
            {to:"google" ,img:require("../../../public/img/9.png"),name:"谷歌认证",set:"未设置" },
            {to:"userpin" ,img:require("../../../public/img/10.png"),name:"安全码",set:"" },
            {to:"admin" ,img:require("../../../public/img/11.png"),name:"管理员",set:"" },
            {to:"about" ,img:require("../../../public/img/12.png"),name:"关于我们",set:"" },
            ]
        }
  },
  methods:{
    scan(){
        let that= this
        // that.$router.push(`scanpay`)
          jsBridge.scan({
              needResult: true, //默认为false，扫描结果由App处理；true则直接返回扫描结果
          }, function(code) {
              if (code) {
                  alert(code);
                //   window.localStorage.setItem("tokenstr",code)
                //   that.$router.push(`scanpay`)
              } else {
                // alert("扫码失败或取消了扫码");
              }
          });
    },
    logout(){
            Api.post("api/login/loginOut").then(res=>{
        // console.log(res)
        if(res.status===200){
          alert(res.msg)
          window.localStorage.removeItem("token")
          this.$router.push("login")
        }
      })
    }

  }

}
</script>
<style scoped lang="less">

</style>