
<template>
<div class="app">
  <h3>小黑学习网</h3>
  <!-- 姓名 -->
  <input type="text" placeholder="请输入姓名：" v-model="username">
  <br>

  单身:
   <input type="checkbox" v-model="isSingle">
   <br>
  <!-- 性别 -->
  <input type="radio" name="gender" value="1" v-model="gender">男
  <input type="radio" name="gender" value="2" v-model="gender">女
  <br><br>

  所在城市：
  <select v-model="cityID">
    <option value="101">北京</option>
    <option value="102">上海</option>
    <option value="103">成都</option>
    <option value="104">南京</option>
    <option value="105">广州</option>
  </select>

  <br>
  自我评价
  <br>
  <textarea></textarea>

</div>
</template>
<script>
export default {
  name:'APP',
  data(){
    return {
      username:"",
      isSingle:true,
      gender:"1",
      cityID:"102"
    }

  }
}
 
</script>

<style scoped>


</style>
