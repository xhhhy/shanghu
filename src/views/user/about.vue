<template>
  <div class="firend">
     <div class="title"> <span  @click="back" class="back"><img class="left" src="../../../public/img/6.png" alt=""> </span>关于我们</div>
        <div class="aboutimg">
          <div ><img src="../../../public/img/1.png" alt="" srcset=""></div>
          <img class="scan" src="../../../public/img/13.png" alt="" srcset="">
          <div style="color: white; line-height：1.5" >
              扫一扫 <br>下载Merchant wallet
          </div>
        </div>


  </div>
</template>

<script>
// import Api from '../../Api/Api'

export default {
  name: "changepass",
  data() {
    return {
      radio3: '1',
      img:""
    };
  },
  methods:{
      back(){
          this.$router.back(-1)
      },

  },
  mounted(){
    //   Api.get("api/home/uploadAddress").then(res=>{
    //     this.img=res.res.img
    //     console.log(res)
    //   })
  }
};
</script>

<style lang="less" scoped>
.firend{
  height: 100vh;
    // background: url("../../../public/img/login.png");
        color: white;
        background: url("../../../public/img/23.png");
    background-repeat: no-repeat;
    background-size: 100% 60%;}
.aboutlogo{
  .logo{
    padding-top: 105px
  }
  margin-top: -80px;
  padding-bottom: 60px;
}
.aboutcont{
  font-size: 12px;
  color:#fff;
  line-height: 2;
  padding: 40px 20px 20px 20px ;
}
.scan{
    margin-top: 150px;
}
.aboutimg{
     font-size: 14px;
  color:#000;
  line-height: 2;
  margin-top: 40px;
  text-align: center;
  margin-top: 105px;
  img{
    width: 40%;
  }
}
</style>
