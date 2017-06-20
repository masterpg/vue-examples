<style lang="scss">
  .host {
  }
</style>

<template>
  <div class="host">
    <h1>Examples</h1>
    <ul>
      <li><router-link to="/abc">/abc</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VueRouter from 'vue-router';
  import AbcOne from './abc/abc.vue';

  Vue.use(VueRouter);

  const routes = [
    { path: '/abc', component: AbcOne },
  ];

  const router = new VueRouter({
    routes // routes: routes の短縮表記
  });

  export default {
    router,
  }
</script>

