<template>
  <el-container>
    <el-header height="49px">
      <my-header></my-header>
    </el-header>
    <el-main>

    </el-main>
    <el-footer height="49px">
      <main-foot-nav>
      </main-foot-nav>
    </el-footer>
  </el-container>
</template>

<script>
import MyHeader from "@/components/content/Header/myHeader";
import MainFootNav from "@/components/content/FootNav/mainFootNav";
export default {
name: "Profile",
  components: {MainFootNav, MyHeader}
}
</script>

<style scoped>

</style>