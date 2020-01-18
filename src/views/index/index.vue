<template>
  <div class="index">
        <div class="title1">
            <div class="titlehead">
                     <el-col :span="3"><div class="head"> <img src="../../../public/img/logo.png" alt=""></div></el-col>
                    <el-col :span="20"><div class="headfont">APT</div><div class="">ID：10086</div>
                    </el-col>
            </div>
              <div class="headcont">
                    <div class="my">我的资产 ( USDT ) </div>
                    <div class="myprice">2,564.0000  </div>
                    <div class="look"><router-link to="usdtmessage">查看明细</router-link> </div>
              </div>
        </div>
        <div class="cont">
               <el-col :span="12"><div>
                  <div class="contf" >8888.8888</div>
                  <div>今日充值</div>
                 </div></el-col>
                    <el-col :span="12"><div class="">
                  <div class="contf">8888.8888</div>
                  <div>今日提现</div>
                      </div></el-col>
        </div>
          <div class="price">
               <div class="leftp"><img src="../../../public/img/3.png" alt=""> 充值管理</div>
             <div class="rightp"><img  src="../../../public/img/4.png" alt=""> 提现管理</div>
        </div>
        <div class="foot">
          <div style="font-size:22px">财务数据统计</div>
          <div class="detial">查看详情</div>
        </div>

        <Nav />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "../../components/mav"
export default {
  name: 'index',
  components: {
    Nav
  },
  data(){
    return{
    }
  },
  methods:{
  

  }
}
</script>

<style lang="less" scoped>
.foot{
 font-size: 13px;
  line-height: 20px;
  background: url("../../../public/img/5.png");
  background-size: 100%  100%;
  padding: 30px 0px 100px 20px; 
  margin: 60px 20px 20px;
  .detial{
    margin-top: 15px;
  background-image: linear-gradient( to right,#317afe, #419ff7);
  width: 20%;
  text-align: center;
  border-radius: 5px;
  font-size: 12px;
  }
}




</style>
