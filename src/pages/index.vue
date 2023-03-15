<template>
  <el-card>
    <h3>Index</h3>
  </el-card>
</template>

<script setup lang="ts">
const router = useRouter();
router.push('/theme');
</script>

<route lang="yaml">
meta:
  layout: admin
  title: 首页
  nologin: true
</route>