<style type="text/css">
  @import url(../style/alert.css);
</style>
<template>
  <div class="error-wrapper-bg">
    <div class="error-wrapper">
      <div class="brand">
        <div class="pin"></div>
        <div class="brand-animate">
          <div class="line leftline"></div>
          <div class="line rightline"></div>
          <div class="box">
            <div class="box-inner">
              <h1 class="error">403</h1>
              <h4 class="error-info">Forbidden</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="info">
        <span class="error-notify-warning">403</span>
        <a class="gobackindex"  @click="backMain">返回首页</a>
        <p class="error-notify-tips">缺少权限</p>
        <p>错误信息：您无权操作此项</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "403-page",
    methods: {
      back () {
        window.history.back()
      },
      backMain () {
        window.location = '/'
      }
    }
  }
</script>
