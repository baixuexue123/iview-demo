<template>
  <MainFrame active-menu="VPC">
    <template slot="menu">
      <Menu width="200">
          <MenuGroup title="分组标题">
            <Menu-item name="link1" >功能菜单-1</Menu-item>
            <Menu-item name="link2" >功能菜单-2</Menu-item>
          </MenuGroup>
      </Menu>
    </template>
    <template slot="content">
      <router-view></router-view>
    </template>
  </MainFrame>
</template>

<script>
import MainFrame from '@/components/MainFrame'
export default {
  name: 'App',
  components: {MainFrame}
}
</script>

<style>

</style>
