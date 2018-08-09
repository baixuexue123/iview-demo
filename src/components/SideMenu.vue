<template>
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
        <i-MenuItem name="1-1">Option 1</i-MenuItem>
        <i-MenuItem name="1-2">Option 2</i-MenuItem>
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
        <i-MenuItem name="3-2">Option 2</i-MenuItem>
    </Submenu>
  </Menu>
</template>
<script>
export default {
    name: 'side-bar',
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
