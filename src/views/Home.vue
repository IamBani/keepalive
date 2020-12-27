<template>
  <div class="home">
    <button @click="$router.push('/about')">跳转到列表</button>
    <button @click="clear">清空</button>
  </div>
</template>

<script>
// @ is an alias to /src
// eslint-disable-next-line no-unused-vars
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "home",
  methods: {
    ...mapActions(["AddInclude", "DelInclude"]),
    clear() {
      this.DelInclude("about");
    },
  },
  beforeRouteLeave(to, from, next) {
    if (to.fullPath === "/about") {
      this.AddInclude("about");
    }
    next();
  },
};
</script>
