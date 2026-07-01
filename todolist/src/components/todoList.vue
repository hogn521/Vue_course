<template>
  <ul class="list-group">
    <li
      v-for="(item,index) in todolist"
      :key="item.id"
      class="list-group-item d-flex justify-content-between align-items-center"
    >
      <!-- 复选框 -->
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value
          :id="item.id"
          v-model="item.isCompleted"
        />
        <label class="form-check-label" for="defaultCheck1" 
        :class="item.isCompleted ? 'delete':''">{{ item.task }}</label>
      </div>
      <span class="badge badge-primary badge-pill" v-if="item.isCompleted">已完成</span>
      <span class="badge badge-warning badge-pill" v-else>未完成</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "todoList",
  props: {
    todolist: {
      type: Array,
      default: []
    }
  },
  data() {
    return {

    }
  }
}

</script>


<style scoped>
.list-group {
  width: 500px;
  margin: 0 auto;
}

.delete{
  text-decoration: line-through;
}
</style>