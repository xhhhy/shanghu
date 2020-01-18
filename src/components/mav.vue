<template>
  <div>
    <el-footer  height="60px" id="nav">
      <el-row :gutter="15">
        <el-col :span="12" v-for="(item,index) in nav" :key="index">
          <router-link :to="item.url" active-class="active">
            <i class="icon iconfont" :class="item.iconClass"></i>
          </router-link>
        </el-col>
      </el-row>
    </el-footer>
  </div>
</template>

<script>
export default {
  name: "navfoot",
  data() {
    return {
      nav:[
        {url:'/index',iconClass:'icon-qianbao'},
        // {url:'/message',iconClass:'icon-message'},
        {url:'/user',iconClass:'icon-shezhi'}
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.el-footer{
  text-align: center;
  position: fixed;
  z-index: 9999;
  width: 100%;
  background: #192129;
  bottom: 0;
  .iconfont{
    line-height: 60px;
    font-size: 28px;
    color: #999;
  }
  .active{
    i{
      color: #2059ff;
    }
  }
}
.msghead{
  color: white;
  text-align: center;
  font-size: 16px;
  padding: 20px 0 20px;
  letter-spacing: 1px;
  background: #1f2933;

}
.content{
  color: white;
}
.el-tabs__nav{
  width: 100%!important;
}
.el-tabs__item{
  color: #fff!important;
  width: 50%!important;
  text-align: center;
  padding: 0!important;
}
.el-tabs__nav-wrap::after{
  background-color:#1f2933!important
}

</style>
