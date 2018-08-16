<template>
  <div>
    <div class="layout-logo"></div>
    <div class="layout-nav">
      <Poptip trigger="hover" placement="bottom-end">
        <Avatar icon="ios-person" />
        <div slot="title" class="navbar-username"><i>{{username ? username : '匿名用户'}}</i></div>
        <div slot="content" class="navbar-usermenu">
          <Button type="error" long @click="$emit('logout')">退出登陆</Button>
        </div>
      </Poptip>
    </div>
  </div>
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
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    margin: 8px auto;
    margin-right: 20px;
    float: right;
    line-height: 32px;
  }
  .navbar-username{
    color:#495060;
    text-align: center;
  }
  .navbar-usermenu{
    color:#495060;
  }
  .navbar-usermenu{
    margin:0px 0px 7px 0px;
    padding:0px;
    width:210px;
    overflow: hidden;
  }
</style>
