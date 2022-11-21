<template>
  <el-header>
    <a href="./" class="logo">
      <img src="@/assets/images/logo.png" alt="阳洋出行logo">
    </a>
    <el-divider direction="vertical" />
    <el-avatar :size="30" :src="userInfo.logoUrl">{{ userInfo.enterpriseName &&
        userInfo.enterpriseName[0]
    }}</el-avatar>
    <div :class="{ 'company-name': true, 'notag': !userInfo.starLevel }" :data-text="userInfo.starLevel + '星同行'">{{
        userInfo.enterpriseName
    }}</div>
  </el-header>
</template>

<script setup lang="ts">
import { GlobalStore } from "@/store/modules/global";

const globalStore = GlobalStore();

const userInfo = computed(() => {
  return globalStore.userInfo
});

</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  height: 65px;
  background: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid #E6E6E6;
  display: flex;
  align-items: center;

  .logo {
    margin-left: 24px;

    img {
      display: block;
      width: 60px;
      height: 30px;
    }
  }

  .el-divider {
    height: 30px;
    margin: 0 16px;
  }

  .el-avatar {
    font-size: 12px;
    background: #B6B6B6;
    border: 1px solid #E6E6E6;
  }

  .company-name {
    font-size: 16px;
    line-height: 1;
    margin-left: 8px;
    display: flex;
    align-items: center;

    &.notag::after {
      display: none;
    }

    &::after {
      content: attr(data-text);
      font-size: 12px;
      padding: 2px 4px;
      border: 1px solid #404352;
      border-radius: 4px;
      background: #F0F0F0;
      margin-left: 8px;
    }
  }
}
</style>