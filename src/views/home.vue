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
    margin: 0 auto;
    margin-right: 20px;
    float: right;
}
</style>
<template>
    <div class="layout">
        <Layout :style="{height:'100%'}">
            <Header>
              <div class="layout-logo"></div>
              <div class="layout-nav">
                <Poptip trigger="hover" placement="bottom-end">
                  <Avatar icon="ios-person" />
                  <div slot="title"><i>{{username ? username : '匿名用户'}}</i></div>
                  <div slot="content">
                    <Button type="error" @click="$emit('logout')">退出登陆</Button>
                  </div>
                </Poptip>
              </div>
            </Header>
            <Layout :style="{height:'100%'}">
                <Sider hide-trigger :style="{background: '#fff', height:'100%'}">
                  <Menu :active-name="activeMenu" theme="dark"  width="auto" :style="{height: '100%'}" @on-select="handleSelect">
                    <MenuItem name="1" to="/"><Icon type="ios-paper" />Dashboard</MenuItem>
                    <MenuItem name="2" to="/alarm"><Icon type="ios-keypad" />实时告警</MenuItem>
                    <MenuItem name="3" to="/group"><Icon type="ios-analytics" />分组监控</MenuItem>
                    <Submenu name="4">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>管理中心
                        </template>
                        <MenuItem name="4-1" to="alarmHistory">告警历史</MenuItem>
                        <MenuItem name="4-2" to="nodeConfig">节点配置</MenuItem>
                        <MenuItem name="4-3" to="alarmConfig">告警配置</MenuItem>
                        <MenuItem name="4-4" to="trouble">问题节点</MenuItem>
                        <MenuItem name="4-5" to="offline">节点下线</MenuItem>
                        <MenuItem name="4-6" to="paaraa">Paaraa管理</MenuItem>
                    </Submenu>
                  </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px', height:'100%'}">
                    <Content :style="{padding: '24px', background: '#fff', height:'100%'}">
                        Content
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
export default {
  data() {
    return {
      username: '白雪',
      activeMenu: '1'
    }
  },
  methods: {
    handleSelect(name) {
      console.log(name);
    }
  }
}
</script>
