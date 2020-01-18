<template>
    <div class="usdtmessage">
           <div class="title"> <span  @click="back" class="back"><img class="left" src="../../../public/img/6.png" alt=""> </span>场外充值记录</div>
            <div   class="codelist" v-for="(item,i) in List" :key="i">
                <div class="codel">
                        <el-row>
                        <el-col :span="12"><div class="codel1">
                                <div class="code1">场外充值</div>
                                <!-- <div class="codet">{{item.amount}}</div> -->
                                <div>123123123123</div>

                            </div>
                            </el-col>
                        <el-col :span="12"><div class="coder">
                                <!-- <div>{{item.date}}</div> -->
                                <!-- <div :class="{code1:item.state==1,code1:item.state==0,code3:item.state==2,code2:item.state==3}" >{{item.state==1?$t('message.jiaoyi'):''}}{{item.state==0?$t('message.jiaoyi'):''}}{{item.state==2?$t('message.jiaoyi1'):''}}{{item.state==3?$t('message.jiaoyi2'):''}}</div> -->
                                <div class="code1"> +1000</div>
                                <!-- <div :class="{code1:item.status==1,code2:item.status==2,code3:item.status==3,code4:item.status==4,code5:item.status==5}"  >{{item.status==1?"等待打款":''}}{{item.status==2?"审核中":''}}{{item.status==3?"已完成":''}}{{item.status==4?"审核失败":''}}{{item.status==5?"已过期":''}}</div> -->
                            </div></el-col>
                        </el-row>
                </div>
                
            </div>
    </div>
</template>

<script>
// import Api from "../../Api/Api"

export default {
    name:"recodep",
    data(){
        return{
            List:[{},{}]
            }
    },
    methods:{
        back(){
            this.$router.back(-1)
        }
    },
    mounted(){
        // Api.get("api/recharge/record").then(res=>{
        //     console.log(res)
        //     this.List=res.res.record
        // })
    }
}
</script>

<style lang="less" scoped>
.code1{
    font-size: 16px;
    color: #03aae1
    }
    .code2{
    font-size: 16px;
    
    color: #0fb889
    }
    .code3{
    font-size: 16px;

    color: white
    }
     .code4{
    font-size: 16px;

    color: #999999
    }
 
  .code5{
    font-size: 16px;

    color: red
    }
 
 
</style>