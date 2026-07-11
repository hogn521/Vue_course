<template>
  <div
    class="btn-group"
    role="group"
    aria-label="Basic example"
  >
    <button
      type="button"
      class="btn btn-secondary"
      @click="changeActive(0)"
    >
      全部
    </button>
    <button
      type="button"
      class="btn btn-secondary"
      @click="changeActive(1)"
    >
      已完成
    </button>
    <button
      type="button"
      class="btn btn-secondary"
      @click="changeActive(2)"
    >
      未完成
    </button>
  </div>
</template>

<script>
export default {
  name: "todoButton",
  data(){
    return{
      active : 0,
    };
  },
  emits:["changShuzu"],
  methods:{
    changeActive(num){
      this.active = num;
      this.$emit("changShuzu",num)
    },
  },
};
</script>

<style scoped>
.btn-group {
  width: 500px;
}
.btn-group button:hover {
  background-color: orange;
}
</style>
