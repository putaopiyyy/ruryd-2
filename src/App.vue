<template>
  <header class="header">
    <span class="logo">欧几里夕-趣谈前端</span>
    <button class="more-btn primary">低代码可视化实践</button>
  </header>
  <main>
    <Board msg='上面的例子'/>
    <CanvaBoard msg='下面的应用'/>
  </main>
</template>

<script setup lang="ts">
import Board from '../src/components/Board.vue'
import CanvaBoard from '../src/components/CanvaBoard.vue'
</script>

<style  lang="scss">
*{
  padding: 0;
  margin: 0;
}
#app {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
h3{
  text-align: center;
  padding: 20px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  height: 70px;
  line-height: 70px;
  background-color: aliceblue;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}
</style>
