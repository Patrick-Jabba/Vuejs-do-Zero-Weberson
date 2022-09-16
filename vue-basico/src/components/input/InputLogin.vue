<template>
  <div>
    <label for="">{{ label }}</label
    ><br />
    <input :type="type" :placeholder="placeholder" v-model="inputValue" />
  </div>
</template>

<script>
export default {
  name: "InputLogin",
  model: {
    prop: "value",
    event: "onChange",
  },
  props: {
    label: { type: String, default: '', require },
    placeholder: { default: '' },
    type: { type: String, default: 'text' },
    value: { type: String, default: '' },
  },
  data() {
    return {
      inputValue: this.value,
    };
  },
  watch: {
    inputValue() {
      this.$emit('onChange', this.inputValue);
    }
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