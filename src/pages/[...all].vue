<template>
  <div class="notfound-page">
    <img src="@/assets/images/img-404.png" alt="404">
    <el-button type="primary" plain @click="handleBack">返回首页</el-button>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const handleBack = () => {
  router.push('/');
}
</script>

<style lang="scss" scoped>
.notfound-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<route lang="yaml">
meta:
  nologin: true
</route>