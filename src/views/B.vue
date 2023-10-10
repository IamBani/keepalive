<template>
  <div>
    <slot name="head" :scop="name"></slot>
    <div>中间{{ b }}{{ c }}</div>
    <slot name="foot">{{ age }}</slot>
  </div>
</template>

<script>
export default {
  name: "BBBB",
  components: {},
  props: ["c", "b"],
  data() {
    return {
      name: "name",
      age: ""
    };
  },
  created() {
    console.log(this);
  }
};
</script>

<style></style>
