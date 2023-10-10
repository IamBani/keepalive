<template>
  <div>
    <A c="1" b="2">
      <template v-slot:head="{ a, scop }">
        <div>head</div>
        <div>{{ a }}</div>
        <div>{{ scop }}</div>
      </template>
      <template v-slot:foot="{ b }">
        <div>foot</div>
        <div>{{ b }}</div>
      </template>
    </A>
  </div>
</template>

<script>
import A from "./A.vue";
export default {
  components: {
    A
  }
};
</script>

<style></style>
