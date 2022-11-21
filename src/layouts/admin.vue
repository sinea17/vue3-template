<template>
  <div class="admin-layout">
    <el-container direction="vertical">
      <Header />
      <el-container style="height: 0">
        <Aside />
        <Main />
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.admin-layout {
  min-height: 100vh;
  display: flex;
}
</style>