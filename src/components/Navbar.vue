<template>
  <Menu model="horizontal" :theme="dark">
    <div class="item">
      <a href="/" class="sys-logo">Dting</a>
    </div>
    <div class="item" style="float: right;">
      <Poptip trigger="hover" placement="bottom-end">
        <Avatar icon="ios-person" size="large" />
        <div slot="title" class="topbar-username"><i>{{username ? username : '匿名用户'}}</i></div>
        <div slot="content" class="topbar-usermenu">
          <Button type="error" long @click="$emit('logout')">退出登陆</Button>
        </div>
      </Poptip>
    </div>
  </Menu>
</template>
<script>
  export default {
    name: "Navbar",
    props: {
      username: String
    },
    methods:{

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
  .topbar-username{
    color:#495060;
    text-align: center;
  }
  .topbar-usermenu{
    color:#495060;
  }
  .topbar-usermenu{
    margin:0px 0px 7px 0px;
    padding:0px;
    width:210px;
    overflow: hidden;
  }
</style>
