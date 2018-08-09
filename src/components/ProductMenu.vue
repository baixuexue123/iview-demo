<template>
  <div v-bar class="custom-vb-box">
    <div :style="{width: '100%'}" :class="menuitemClasses">
      <Tooltip v-for="item in menuList"
               :key="item.appName"
               placement="right"
               :content="item.appDesc"
               :disabled="!isCollapsed"
               :class="{selected: activeMenu === item.appName}"
               class="item">
        <div @click="onMenuClick(item.uri)" class="item-block">
          <i class="iconfont" :class="'icon-' + item.appName.toUpperCase()"></i>
          <span>{{item.appDesc}}</span>
        </div>
      </Tooltip>
    </div>
  </div>
</template>

<script>
  let menuList = [
	  {appName: 'AKS', appDesc: 'AKS', uri: 'https://www.baidu.com'},
	  {appName: 'EIP', appDesc: 'EIP', uri: 'https://www.baidu.com'},
	  {appName: 'HIDS', appDesc: 'HIDS', uri: 'https://www.baidu.com'},
	  {appName: 'LAAS', appDesc: 'LAAS', uri: 'https://www.baidu.com'},
	  {appName: 'NAT', appDesc: 'NAT', uri: 'https://www.baidu.com'},
	  {appName: 'RDS', appDesc: 'RDS', uri: 'https://www.baidu.com'},
	  {appName: 'SGM', appDesc: 'SGM', uri: 'https://www.baidu.com'},
	  {appName: 'SLB', appDesc: 'SLB', uri: 'https://www.baidu.com'},
	  {appName: 'VPC', appDesc: 'VPC', uri: 'https://www.baidu.com'}
  ]

  export default {
    name: "product-menu",
    props: {
      isCollapsed: {
        type: Boolean,
        default: true
      },
      activeMenu: String
    },
    data () {
      return {
        menuList
      }
    },
    methods: {
      onMenuClick (url) {
        window.location.href = url
      }
    },
    computed: {
      menuitemClasses: function () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    }
  }
</script>

<style scoped>
  .custom-vb-box{
    position: inherit !important;
    height:100%;
    padding-bottom: 50px;
  }
  .item {
    padding: 13px 0 13px 20px;
    width: 100%;
    cursor: pointer;
    color: lightgrey;
  }
  .item.selected, item.selected:hover {
    background: #363e4f;
    color: rgb(45, 140, 240);
  }
  .item:not(.selected):hover {
    color: white;
  }
  .menu-item .item-block {
	  line-height: 22px;
	  cursor: pointer;
  }
  .menu-item span{
    width: 120px;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    vertical-align: middle;
    transition: width .2s ease .2s;
    line-height: 16px;
    padding-left: 10px;
	  font-size: 12px;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 18px;
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>
