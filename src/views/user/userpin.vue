<template>
  <div class="security userpin">
           <div class="firendcont firendcont1">
          <div class="title"> <span  @click="back" class="back"><img class="left" src="../../../public/img/6.png" alt=""> </span>项目管理</div>

              <Pin @submit="submit" />   
          </div>
  </div>
</template>

<script>
import Pin from "../../components/pin.vue"
// import Api from "../../Api/Api"

export default {
  name: "security",
  components:{Pin},
  data() {
    return {
            title:"修改安全码",
            confirmPwd :"",
            isold:false,
            oldpass:"",
    };
  },
  methods:{
      back(){
          this.$router.back(-1)
      },
      submit(pwd) {
        // if(this.isold){
        //   this.oldpass = pwd
        //   this.isold =false
        //   this.title=this.$t("message.security1")
        //   return
        // }
        //   if(this.title==this.$t("message.security2")){
        //     Api.post("api/safeSet/changeSafePwd",{oldPwd:this.oldpass,pwd:this.confirmPwd,confirmPwd:pwd}).then(res=>{
        //           alert(res.msg)
        //           window.location.reload()
        //     })
        //   }
        //   this.title=this.$t("message.security2")
        //   this.confirmPwd = pwd
    }
  },mounted(){
    //   Api.get("api/safeSet/isSetPayPwd").then(res=>{
    //     // console.log(res)
    //     if(res.res==false){
    //       this.title=this.$t("message.security")
    //     }
    //     if(res.res==true){
    //       this.isold=res.res
    //       this.title=this.$t("message.security3")
    //     }
    //   })
  }
};
</script>

<style lang="less" scoped>
.security{
    color: white
}
.firend{
  color: white;
  font-size: 13px;
}
.firin{
  margin-bottom: 20px;
}


.tofir{
  text-align: center;
  font-size: 14px;
  background-color: #0fbcfa;
  border-radius: 5px;
  margin-top: 150px;
}

</style>
