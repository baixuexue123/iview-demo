<template>
  <Menu active-name="1" theme="dark"  width="auto" :style="{height: '100%'}" @on-select="handleSelect">
    <MenuItem name="1" to="/"><Icon type="ios-paper" />Dashboard</MenuItem>
    <MenuItem name="2" to="/alarm"><Icon type="ios-keypad" />实时告警</MenuItem>
    <MenuItem name="3" to="/group"><Icon type="ios-analytics" />分组监控</MenuItem>
    <Submenu name="4">
        <template slot="title">
            <Icon type="ios-navigate"></Icon>
            管理中心
        </template>
        <MenuItem name="4-1" to="alarmHistory">告警历史</MenuItem>
        <MenuItem name="4-2" to="nodeConfig">节点配置</MenuItem>
        <MenuItem name="4-3" to="alarmConfig">告警配置</MenuItem>
        <MenuItem name="4-4" to="trouble">问题节点</MenuItem>
        <MenuItem name="4-5" to="offline">节点下线</MenuItem>
        <MenuItem name="4-6" to="paaraa">Paaraa管理</MenuItem>
    </Submenu>
  </Menu>
</template>
<script>
export default {
    name: 'Sidebar',
    data() {
        return {

        }
    },
    methods: {
        handleSelect(name) {
          console.log(name);
        }
    }
}
</script>
