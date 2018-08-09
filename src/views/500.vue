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
              <h1 class="error">500</h1>
              <h4 class="error-info">SERVER ERROR </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="info">
        <span class="error-notify-error">500</span>
        <a class="gobackindex" @click="backMain">返回首页</a>
        <p class="error-notify-tips">服务器内部错误</p>
        <p>错误信息：</p>
        <p class="error-text">网速不稳定,造成响应过慢</p>
        <p class="error-text">服务器已关闭</p>
        <p class="error-text">DNS服务器错误</p>
        <p>您可以：</p>
        <p class="error-text">联系技术人员帮助解决一下吧</p>
        <p class="error-text">尝试重新登录试一试</p>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: "500-page",
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
