<style lang="scss">
  .msg-input {
    width: 300px;
  }
</style>

<template>
  <div>
    <el-input v-model="msg" class="msg-input"></el-input>
    <p>propA: {{propA}}</p>
    <p>propB: {{propB}}</p>
    <p>msg: {{msg}}</p>
    <p>helloMsg: {{helloMsg}}</p>
    <p>computed msg: {{computedMsg}}</p>
    <button @click="greetButtonOnClick">Greet</button>
    <button @click="sleepButtonOnClick">Sleep</button>
    <p>
      <el-date-picker
        type="date"
        v-model="pickedDay"
        placeholder="Pick a day">
      </el-date-picker>
    </p>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Input, DatePicker } from 'element-ui';
  // import { DatePicker } from 'element-datepicker';

  export default {
    components: {
      elInput: Input,
      elDatePicker: DatePicker,
    },

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
        pickedDay: null,
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
