<template>
  <div class="bar">
    <div class="item">
      <a href="/JRCloud/index.html" class="sys-logo">
        <img src="../images/uasLogo.png">
      </a>
    </div>
    <div class="item">
      <a href="#" class="topbar-btn" style="width:130px;">管理控制台</a>
    </div>
    <div class="item" style="float: right;">
      <Poptip trigger="hover" placement="bottom-end">
        <a class="topbar-btn">
          <i class="iconfont icon-uasperson" style="font-size:20px"></i>
        </a>
        <div slot="title" class="topbar-username"><i>{{username ? username : '匿名用户'}}</i></div>
        <div slot="content" class="topbar-usermenu">
            <ul class="usermenu-content">
                <li>
                    <a>
                      <i class="iconfont icon-uasbasic" style="font-size:24px"></i>
                      <p>基本信息</p>
                    </a>
                </li>
              <li>
                <a>
                  <i class="iconfont icon-uasorder" style="font-size:24px"></i>
                  <p>我的订单</p>
                </a>
              </li>
              <li>
                <a>
                  <i class="iconfont icon-uaskey" style="font-size:24px"></i>
                  <p>修改密码</p>
                </a>
              </li>
            </ul>
            <div>
              <Button type="error" long @click="$emit('logout')">退出登陆</Button>
            </div>
        </div>
      </Poptip>
    </div>
    <div class="item" style="float: right;">
      <Dropdown placement="bottom-end" @on-click="workorderOperate">
        <a href="javascript:void(0)" class="topbar-btn">工单</a>
        <DropdownMenu slot="list">
          <DropdownItem name="createOrder">创建工单</DropdownItem>
          <DropdownItem name="queryAll">全部工单</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>

<script>
  export default {
    name: "top-bar",
    props: {
      username: String
    },
    methods:{
      workorderOperate(opename){
        if(opename=="createOrder"){ //创建工单
          //地址请跳转到对应环境的/home/workorder/workordercreate
        }else if(opename=="queryAll"){  //查询全部工单
          window.open("http://www.baidu.com/");
        }
      }
    }
  }
</script>

<style scoped>
  .sys-logo{
    display: inline-block;
    width:70px;
    text-align:center;
  }
  .sys-logo img{
    width:24px;
    height:24px;
    float:left;
    margin-top: 13px;
    margin-left: 20px;
  }

  .bar {
    font-size: 14px;
    height: 50px;
    width: 100%;
    top: 0;
    left: 0;
    padding: 0;
    line-height: 50px;
    background: #373d41;
    color: white;
  }
  .item {
    display: inline-block;
    float: left;
  }
  .topbar-btn {
    cursor: pointer;
    padding: 0 20px;
    border-right: 1px solid #2a2f32;
    height:50px;
    line-height: 50px;
    display: inline-block;
    color: white;
  }
  .topbar-btn:hover {
    background: #2a2f32;
  }
  .topbar-username{
    color:#495060;
    text-align: center;
  }
  .topbar-usermenu{
    color:#495060;
  }
  .topbar-usermenu .usermenu-content{
    margin:0px 0px 7px 0px;
    padding:0px;
    width:210px;
    overflow: hidden;;
  }
  .topbar-usermenu .usermenu-content li{
    display: table;
    float:left;
    width:70px;
    padding:5px;
  }
  .topbar-usermenu .usermenu-content li a{
    display: table-cell;
    width:60px;
    height:60px;
    text-align: center;
    vertical-align: middle;
    background: #f9f9f9;
    color:#a8abb1;
    font-size:12px;
  }
  .topbar-usermenu .usermenu-content li a:hover{
    color:#2d8cf0;
  }
</style>
