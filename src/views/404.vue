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
              <h1 class="error">404</h1>
              <h4 class="error-info">PAGE NOT FOUND </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="info">
        <span class="error-notify-warning">404</span>
        <a class="gobackindex"  @click="backMain">返回首页</a>
        <p class="error-notify-tips">找不到页面</p>
        <p>错误信息：</p>
        <p class="error-text">网速不稳定，而要求链接的网页存在FLASH或者大尺寸图片，造成响应过慢</p>
        <p class="error-text">服务器已关闭</p>
        <p class="error-text">DNS服务器错误</p>
        <p>您可以：</p>
        <p class="error-text">刷新页面试一试</p>
        <p class="error-text">重新登录</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "404-page",
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
