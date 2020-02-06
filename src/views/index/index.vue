<template>
  <div class="index">
        <div class="title1" :style="{background: 'url( '+ imageURL +')'}" >
            <div class="titlehead">
                   点击激活
            </div>
              <div class="headcont">
                <div class="user"> <img src="../../../public/img/user.png" alt=""></div>
                    <div class="my">JANGAD</div>
                    <div class="myprice">8888.00HC </div>
                    <div class="look"><router-link to="usdtmessage">排单</router-link> </div>
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
      imageURL:require("../../../public/img/user.png")
    }
  },
  methods:{
  

  }
}
</script>

<style lang="less" scoped>




</style>
