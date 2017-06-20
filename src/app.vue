<style lang="scss">
  .host {
  }
</style>

<template>
  <div class="host">
    <p>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VueRouter from 'vue-router';
  import {Button} from 'element-ui'

  Vue.use(VueRouter);

  const Foo = { template: '<div>foo</div>' };
  const Bar = { template: '<div>bar</div>' };

  const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ];

  const router = new VueRouter({
    routes // routes: routes の短縮表記
  });

  export default {
    router,

    components: {
      'el-button': Button,
    },

    data() {
      return {
      }
    },

    mounted() {
    },
  }
</script>

