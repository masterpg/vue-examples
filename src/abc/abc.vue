<style lang="scss">
</style>

<template>
  <div>
    <input v-model="msg">
    <p>propA: {{propA}}</p>
    <p>propB: {{propB}}</p>
    <p>msg: {{msg}}</p>
    <p>helloMsg: {{helloMsg}}</p>
    <p>computed msg: {{computedMsg}}</p>
    <button @click="greetButtonOnClick">Greet</button>
    <button @click="sleepButtonOnClick">Sleep</button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Inject, Model, Prop, Watch} from 'vue-property-decorator';

  @Component({})
  export default class Abc extends Vue {

    @Prop({default: 'default value A'})
    propA: string;

    @Prop({default: 'default value B'})
    propB: string;

    // inital data
    msg: string = '';

    // use prop values for initial data
    helloMsg: string = 'Hello, ' + this.propA;

    // lifecycle hook
    mounted() {
      this.msg = 'mounted';
    }

    // computed
    get computedMsg() {
      return 'computed ' + this.msg;
    }

    greet() {
      alert('greeting: ' + this.msg);
    }

    async sleep(ms: number = 1000): Promise<void> {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, ms);
      });
    }

    greetButtonOnClick() {
      this.greet();
    }

    async sleepButtonOnClick() {
      await this.sleep();
      alert('よく寝た！');
    }
  }
</script>