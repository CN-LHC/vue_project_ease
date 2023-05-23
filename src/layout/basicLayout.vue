/*
 * @Author: liuhanchuan 
 * @Date: 2023-02-22 18:20:39 
 * @Last Modified by: liuhanchuan
 * @Last Modified time: 2023-05-23 10:19:42
 * 通用布局
 */

<template>
  <div class="layout-wrapper">
    <!-- <keep-alive></keep-alive> -->
    <router-view />
  </div>
</template>

<script>
export default {
  created() {}
};
</script>

<style scoped>
.layout-wrapper {
  width: 100%;
  height: 100%;
}
</style>
