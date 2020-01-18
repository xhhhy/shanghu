<template>
    <div class="admin">
           <div class="title"> <span  @click="back" class="back"><img class="left" src="../../../public/img/6.png" alt=""> </span>管理账号</div>

            <div class="contlist">
                    <div class="cont">
                        <el-row>
                        <el-col :span="6"><div >KI0001</div></el-col>
                        <el-col :span="6"><div>财务</div></el-col>
                        <el-col :span="6"><div class="color1" >正常</div></el-col>
                        <el-col :span="6"><div class="setitem" >编辑</div></el-col>
                        </el-row>
                    </div>
                     <div class="cont">
                        <el-row>
                        <el-col :span="6"><div >KI0001</div></el-col>
                        <el-col :span="6"><div>财务</div></el-col>
                        <el-col :span="6"><div class="color" >已锁定</div></el-col>
                        <el-col :span="6"><div class="setitem" >编辑</div></el-col>
                        </el-row>
                    </div>
            </div>
    </div>
</template>
<script>
export default {
    name:"admin",
    data(){
        return{

        }
    },
    methods:{
        back(){
            this.$router.back(-1)
        }
    },
    mounted(){

    }
}
</script>
<style lang="less" scoped>
.cont{
    text-align: center;
    font-size: 12px;
    margin-bottom: 15px;
    border-bottom: 1px solid #808081;
    padding-bottom:20px;
    padding-top: 20px;
    .color1{
        color:#2059ff;
    }
}
.contlist{
    .setitem{
        padding: 3px 5px ;
        width: 50%;
        margin: 0 auto;
        background: #2059ff;
        border-radius: 8px;
    }
    margin-top: 30px;
}
</style>