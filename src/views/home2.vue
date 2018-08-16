<template>
  <MainLayout active-menu="1" username="白雪">
    <template slot="content">
      <router-view></router-view>
    </template>
  </MainLayout>
</template>

<script>
import MainLayout from '@/components/MainLayout'
export default {
  name: 'Home2',
  components: {MainLayout}
}
</script>

<style>

</style>
