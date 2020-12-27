<template>
  <div>
    <input type="text" v-model="value" />
    <button @click="back()">返回</button>
  </div>
</template>

<script>
export default {
  name: "data",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    back() {
      this.bus.$emit("log", this.value);
      this.$router.back();
    },
  },
};
</script>

<style></style>
