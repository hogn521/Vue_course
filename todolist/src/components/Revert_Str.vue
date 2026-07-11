<template>
  <div>
    <h1>{{ str }}</h1>
    <button @click="btnFn">反转世界</button>
  </div>
</template>

<script>
export default {
  name: "revert_str",
  data() {
    return {
      str: "hello,wolrd",
    };
  },
  methods: {
    btnFn() {
      // 思路：先把字符串->数组，再拼接
      let arr = this.str.split("").reverse().join("");
      this.str = arr;
      console.log(arr);
    },
  },
};
</script>

<style lang="scss" scoped></style>
