<template>
  <el-main>
    <Breadcrumb />
    <el-scrollbar class="main-scrollbar">
      <div class="container">
        <div class="conetnt">
          <router-view />
        </div>
        <div class="footer">成都阳洋福行实业有限公司 蜀ICP备 16035247号-1</div>
      </div>
      <el-backtop :right="50" :bottom="100" target=".main-scrollbar .el-scrollbar__wrap" />
    </el-scrollbar>
  </el-main>
</template>

<style lang="scss" scoped>
.el-main {
  padding: 0;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;

  .el-scrollbar {
    flex: 1;
  }

  .container {
    min-height: calc(100vh - 105px);
    display: flex;
    flex-direction: column;
  }

  .conetnt {
    flex: 1;
  }

  .footer {
    line-height: 50px;
    text-align: center;
    color: #aaa;
    margin-top: -16px;
  }
}
</style>