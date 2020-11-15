<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style>
  @import "assets/css/base.css";
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
  .el-header, .el-footer {
    background-color: #fff;
    color: #333;
    text-align: center;
  }
  .el-header {
    display: flex;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 1000;
    box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    margin-top: 49px;
    height: calc(100vh - 49px - 49px);
    padding: 10px !important;
  }
  .el-footer {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 3000;
  }
</style>