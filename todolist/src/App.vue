<template>
  <div>
    <h1>根组件</h1>
    <todoList :todolist="todolist"></todoList>
    <todoButton @changeActive="hangeFun"></todoButton>
  </div>
</template>

<script>
import todoList from "./components/todoList.vue";
import todoButton from "./components/todoButton.vue";
export default {
  name: "App",
  data() {
    return {
      todolist: [
        { id: 1, task: "吃饭", isCompleted: true },
        { id: 2, task: "睡觉", isCompleted: false },
        { id: 3, task: "打游戏", isCompleted: true },
        { id: 4, task: "学习", isCompleted: true },
      ],
      active: 0,
    };
  },

  // 使用计算属性来实现当列表里的isCompleted改变的现实
  computed:{
    todolist(){
      if(this.active === 0){
        return this.todolist
      }
      else if(this.active === 1){
        return this.todolist.filter(item => item.isCompleted)
      }
      else{
        return this.todolist.filter(item => !item.isCompleted)
      }
    }
  },
  methods: {
    hangeFun(index) {
      this.active = index;
      console.log(this.active);
    },
  },
  components: {
    todoList,
    todoButton,
  },
};
</script>
