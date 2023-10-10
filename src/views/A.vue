<script>
import B from "./B.vue";
export default {
  name: "AAAA",
  components: {
    B
  },
  render() {
    console.log(this);
    console.log(Object.keys(this.$scopedSlots));
    const scopedSlots = {
      head: prop => {
        return this.$scopedSlots.head({ a: "str", ...prop });
      },
      foot: () => {
        return this.$scopedSlots.foot("aa");
      }
    };
    return <B {...{ attrs: this.$attrs }} scopedSlots={scopedSlots}></B>;
  }
};
</script>

<style></style>
