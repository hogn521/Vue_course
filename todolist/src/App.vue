<template>
  <div>
    <h1>根组件</h1>
    <todoList :todolist="todolist"></todoList>
    <todoButton></todoButton>
  </div>

</template>

<script>
import todoList from './components/todoList.vue';
import todoButton from './components/todoButton.vue';
export default {
  name: 'App',
  data(){

    return{
      todolist:[
        {id:1,task:"吃饭",isCompleted:true},
        {id:2,task:"睡觉",isCompleted:false},
        {id:3,task:"打游戏",isCompleted:true},
        {id:4,task:"学习",isCompleted:true},
      ]
    }
  },
  components: {
    todoList,
    todoButton
  }
}
</script>
