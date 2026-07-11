<template>
  <div>
    <p>请选择你喜欢的专栏</p>
    <div
      style="display: inline-block"
      v-for="(item, index) in arr"
      :key="index"
    >
      <input
        type="checkbox"
        :value="item"
        v-model="selArr"
      /><span>{{ item }}</span>
    </div>
    <div>
      <ul
        v-for="(item, index) in selArr"
        :key="index"
      >
        <li>{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "choose_fav",
  data() {
    return {
      arr: [
        "科幻",
        "奇幻",
        "悬疑",
        "浪漫",
        "武侠",
        "历史",
        "恐怖",
        "喜剧",
        "动作",
        "动画",
      ],
      selArr: [],
    };
  },
};
</script>

<style scoped>
span {
  padding: 10px;
}
</style>
