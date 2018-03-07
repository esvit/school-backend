<template>

  <el-container style="height: 100%;">
    <el-header>

        <nav-bar />

    </el-header>
    <el-main>
      <router-view
                   element-loading-text="Loading..."
                   element-loading-spinner="el-icon-loading"
                   element-loading-background="rgba(255, 255, 255, 0.8)">
      </router-view>
    </el-main>
  </el-container>

</template>

<script>
import NavBar from 'components/navBar';

export default {
  components: {
    NavBar
  }
};
</script>
