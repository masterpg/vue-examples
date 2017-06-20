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

<script>
  import Vue from 'vue';

  export default {
    props: {
      propA: {
        type: String,
        default: 'default value A',
      },
      propB: {
        type: String,
        default: 'default value B',
      },
    },

    data() {
      return {
        msg: '',
        helloMsg: `Hello ${this.propA}`,
      }
    },

    mounted() {
      this.msg = 'mounted';
    },

    methods: {
      greet() {
        alert('greeting: ' + this.msg);
      },

      async sleep(ms = 1000) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, ms);
        });
      },

      greetButtonOnClick() {
        this.greet();
      },

      async sleepButtonOnClick() {
        await this.sleep();
        alert('よく寝た！');
      },
    },

    computed: {
      computedMsg() {
        return 'computed ' + this.msg;
      },
    }
  }
</script>