<template>
  <div>
    <todoInput></todoInput>
    <todoList :todoList="filterTodoList"></todoList>
    <todoButton @changShuzu="hangFun"></todoButton>
  </div>
  <choose_fav></choose_fav>
</template>

<script>
import todoList from "./components/todoList.vue";
import todoButton from "./components/todoButton.vue";
import todoInput from "./components/todoInput.vue";
import Revert_Str from "./components/Revert_Str.vue";
import choose_fav from "./components/choose_fav.vue";
export default {
  data() {
    return {
      todoList: [
        { id: 1, task: "吃饭", isCompleted: true },
        { id: 2, task: "睡觉", isCompleted: false },
        { id: 3, task: "打游戏", isCompleted: true },
        { id: 4, task: "学习", isCompleted: true },
      ],
      active: 0,
    };
  },
  computed: {
    filterTodoList() {
      if (this.active === 0) return this.todoList;
      else if (this.active === 1)
        return this.todoList.filter((item) => item.isCompleted);
      else
        return this.todoList.filter(item => !item.isCompleted);
    },
  },
  methods: {
    hangFun(index) {
      this.active = index;
    },
  },
  components: {
    todoList,
    todoButton,
    todoInput,
    Revert_Str,
    choose_fav
  },
};
</script>

<style lang="scss" scoped></style>
