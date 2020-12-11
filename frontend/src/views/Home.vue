<template>
  <div class="home">
    <p>{{ msg }}</p>
  </div>
</template>

<script lang="ts">
import { onMounted } from 'vue';
import { Options, Vue } from 'vue-class-component';
import axios from 'axios';

export default {
  name: 'Home',
  setup() {
    const path = 'http://localhost:5000/ping';
    let msg = '';

    onMounted(() => {
      axios.get(path).then((res) => {
        msg = res.data;
      });
    });

    return {
      msg,
    };
  },
};
</script>
