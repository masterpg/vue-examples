<style lang="scss">
  .host {
  }
</style>

<template>
  <div class="host">
    {{ `${person.first} ${person.last}` }}
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    data() {
      return {
        person: {
          first: '',
        }
      }
    },

    mounted() {
      this.person.first = 'masaaki';
      this.person.laset = 'hojo';
    },
  }
</script>
