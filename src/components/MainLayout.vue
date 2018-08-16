<template>
  <div class="layout">
    <Layout :style="{height:'100%'}">
      <Header :style="{height: '50px', padding: '0'}">
        <Navbar></Navbar>
      </Header>
      <Layout :style="{height:'100%'}">
        <Sider hide-trigger :style="{height:'100%'}">
          <Sidebar :active-menu="activeMenu"></Sidebar>
        </Sider>
        <Layout :style="{padding: '0 24px 24px', height:'100%'}">
          <Content class="app-content" style="margin-top: 20px">
            <slot name="content"></slot>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import Navbar from './Navbar'
import Sidebar from'./Sidebar';
import '../fonts/iconfont.css';
export default {
  components: {Navbar, Sidebar},
  props: {
    activeMenu: String,
    username: String
  },
  data() {
    return {

    };
  },
  methods: {
    handleSelect(name) {
      console.log(name);
    }
  }
}
</script>
<style scoped>
  .layout{
      border: 1px solid #d7dde4;
      background: #f5f7f9;
      position: relative;
      border-radius: 4px;
      overflow: hidden;
      height: 100%;
  }
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
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
.app-content{
  padding: '24px';
  background: '#fff';
  height:'100%';
}
</style>
