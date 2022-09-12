<template>
  <button @click="callback">{{ value }}</button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    value: {
      type: String,
      require,
    },
    callback: { type: Function, default: () => {} },
  },
};
</script>

<style scoped>
button {
  width: 100%;
  background-color: var(--primary-color);
  color: #fff;
  padding: 8px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
    background-color: var(--secondary-color);
}
</style>