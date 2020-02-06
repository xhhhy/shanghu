<template>
  <div>
    <el-footer   id="nav">
      <el-row :gutter="15">
        <el-col :span="6" v-for="(item,index) in nav" :key="index">
          <router-link :to="item.url" active-class="active">
            <i class="icon iconfont" :class="item.iconClass"></i>
            <div class="font">{{item.name}}</div>
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
        {url:'/index',iconClass:'icon-home',name:"首页"},
        {url:'/1',iconClass:'icon-shangwutubiao-',name:"众筹"},
        // {url:'/message',iconClass:'icon-message'},
        {url:'/2',iconClass:'icon-wj-bjb',name:"财务"},
        // {url:'/message',iconClass:'icon-message'},
        {url:'/3',iconClass:'icon-tubiao-',name:"我的"}
      ]
    };
  }
};
</script>

<style lang="less" scoped>
#nav{
  padding-top: 10px;
  padding-bottom: 10px;
}
.el-footer{
  text-align: center;
  position: fixed;
  z-index: 9999;
  width: 100%;
  background: #192129;
  bottom: 0;
  .iconfont{
    font-size: 22px;
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
.font{
  font-size: 12px;
line-height: 12px;
color:#fff
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
