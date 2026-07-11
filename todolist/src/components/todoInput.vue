<template>
  <div class="input-group flex-nowrap">
    <div class="input-group-prepend">
      <span
        class="input-group-text"
        id="addon-wrapping"
        >新任务：</span
      >
    </div>
    <input
      type="text"
      class="form-control"
      placeholder="请输入你的任务："
      aria-label="Username"
      aria-describedby="addon-wrapping"
    />
    <button class="btn-success">
      提交
    </button>
  </div>
</template>

<script>
export default {
  name: "todoInput",
};
</script>

<style scoped>
.input-group {
  width: 500px;
  margin: 0 auto;
  padding-bottom: 10px;
}
</style>
