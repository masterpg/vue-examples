import Vue from 'vue';
import App from './app.vue';
import 'babel-polyfill';
import 'element-ui/lib/theme-chalk/index.css'

new Vue({
  el: '#app',
  render: h => h(App),
});
