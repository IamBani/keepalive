<template>
  <div id="app">
    <keep-alive :include="include">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      include: [],
    };
  },
  created() {
    this.include = this.$store.state.include;
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
