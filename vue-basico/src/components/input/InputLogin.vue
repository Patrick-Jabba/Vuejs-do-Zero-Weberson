<template>
  <div>
    <label for="">{{ label }}</label
    ><br />
    <input :type="type" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: "InputLogin",
  props: {
    label: {
      type: String,
      require,
    },
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
input {
  width: 80%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #bbb;
  outline: none;
  border-radius: 4px;
}
</style>