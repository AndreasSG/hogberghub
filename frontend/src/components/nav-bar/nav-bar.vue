<template>
  <div class="nav-wrapper">
    <h1>Hogberg Hub</h1>
    <div class="nav-link-wrapper">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
import { Vue } from 'vue-class-component';

export default class NavBar extends Vue {}
</script>

<style lang="scss">
.nav-wrapper {
  padding: 1em;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
