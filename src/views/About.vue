<template>
  <div class="about">
    <input type="text" v-model="text" />
    <button @click="$router.push('/data')">跳转到数据</button>
    <button @click="back()">返回</button>
    <ul class="ul">
      <li class="li" v-for="(item, index) in list" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "about",
  data() {
    return {
      text: "你好",
      list: ["王武", "李四", "赵六", "宋七"],
    };
  },
  activated() {
    console.log("activated");
  },

  deactivated() {
    console.log(this.$options);
    console.log("deactivated");
  },
  beforeRouteLeave(to, from, next) {
    console.log(to);
    if (to.fullPath === "/") {
      console.log(12333);
      Object.assign(this.$data, this.$options.data());
    }
    next();
  },
  methods: {
    ...mapActions(["DelInclude"]),
    back() {
      this.DelInclude("about");
      setTimeout(() => {
        this.$router.back();
      });
    },
  },
  mounted() {
    this.bus.$on("log", (data) => {
      console.log(data);
      this.text = data;
    });
  },
};
</script>

<style scoped lang="scss">
.li {
  &:not(:first-child) {
    color: aqua;
  }
}
</style>
