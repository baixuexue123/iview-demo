<template>
  <Layout :style="{height: '100%'}">
    <Header :style="{height: '50px', padding: '0'}">
      <TopBar></TopBar>
    </Header>
    <Layout>
      <Sider collapsible :collapsed-width="70" v-model="isCollapsed" :style="{paddingTop: '10px'}" @on-collapse="setSideMenuStatus">
        <ProductMenu :is-collapsed="isCollapsed" :active-menu="activeMenu"></ProductMenu>
      </Sider>
      <Layout>
        <Sider class="app-menus">
          <slot name="menu"></slot>
        </Sider>
        <Content class="app-content">
          <slot name="content"></slot>
        </Content>
      </Layout>
    </Layout>
  </Layout>
</template>

<script>
import TopBar from './TopBar';
import ProductMenu from './ProductMenu';
import '../fonts/iconfont.css';
import {getCookie,setCookie,checkCookie} from '../utils/utils';

export default {
  name: "app",
  components: {TopBar, ProductMenu},
  props: {
    activeMenu: String
  },
  data () {
    return {
      isCollapsed: true
    };
  },
  computed: {
    menuitemClasses: function () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  created(){
    this.initSideMenuStatus();
  },
  methods:{
    initSideMenuStatus(){
      let menustatus=checkCookie("sideMenuStatus");
      if(menustatus=="expand"){
        this.isCollapsed=false;
      }else{
        this.isCollapsed=true;
      }
    },
    setSideMenuStatus(menustatus){
      if(menustatus){ //为true时是收起状态
        setCookie("sideMenuStatus","mini",365);
      }else{  //为false时是展开状态
        setCookie("sideMenuStatus","expand",365);
      }
    }
  }
}
</script>

<style>
  html, body {
    height: 100%;
  }
  .app-menus{
    background:#ffffff !important;
    overflow:auto;
    border-right:1px solid #e0e0e0;
  }
  .app-menus .ivu-menu-vertical.ivu-menu-light:after{
    width:0px;
  }
  .app-content{
    background:#f5f5f6;
    padding:15px;
  }
</style>
