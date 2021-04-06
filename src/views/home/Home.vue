<template>
  <div class="home-head">
    <div class="home-left"></div>
    <div class="home-center">首页</div>
    <div class="home-right"></div>
  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped>
  .home-head{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
  }
  .home-left, .home-right{
    width: 50px;
  }
  .home-center{
    position: fixed;
    top:0px;
    left: 0px;
    right: 0px;

    flex: 1;
  }
</style>
