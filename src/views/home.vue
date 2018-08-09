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
</style>
<template>
    <div class="layout">
        <Layout :style="{height:'100%'}">
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <i-MenuItem name="1"><Icon type="ios-navigate"></Icon>Item 1</i-MenuItem>
                        <i-MenuItem name="2"><Icon type="ios-keypad"></Icon>Item 2</i-MenuItem>
                        <i-MenuItem name="3"><Icon type="ios-analytics"></Icon>Item 3</i-MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout :style="{height:'100%'}">
                <Sider hide-trigger :style="{background: '#fff', height:'100%'}">
                    <Menu active-name="4" theme="dark"  width="auto" :style="{height: '100%'}" @on-select="handleSelect">
                        <i-MenuItem name="4" to="/">
                            <Icon type="ios-paper" />
                            Dashboard
                        </i-MenuItem>
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                Item 1
                            </template>
                            <i-MenuItem name="1-1" to="dashboard">dashboard</i-MenuItem>
                            <i-MenuItem name="1-2" to="500">500</i-MenuItem>
                            <i-MenuItem name="1-3">Option 3</i-MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                Item 2
                            </template>
                            <i-MenuItem name="2-1">Option 1</i-MenuItem>
                            <i-MenuItem name="2-2">Option 2</i-MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                Item 3
                            </template>
                            <i-MenuItem name="3-1">Option 1</i-MenuItem>
                            <i-MMenuItem name="3-2">Option 2</i-MMenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px', height:'100%'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
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
    name: 'main-main',
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
