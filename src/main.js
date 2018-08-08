import Vue from 'vue';
import iView from 'iview';
import App from './App.vue';
import router from './router/index.js';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
    data: {
      currentPageName: ''
    },
    mounted () {
      this.currentPageName = this.$route.name;
    },
    created () {
    }
});
