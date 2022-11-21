<template>
  <el-card>
    <template #header>
      <h3>登录页</h3>
    </template>
    <el-button type="primary" @click="handleLogin">登录</el-button>
  </el-card>
</template>
<script lang="ts" setup>
import { GlobalStore } from "@/store/modules/global";
const globalStore = GlobalStore();
const router = useRouter();
const handleLogin = () => {
  globalStore.setToken('token')
  globalStore.setUserInfo({
    name: '测试账号',
    enterpriseName: '测试公司名称',
    starLevel: 3
  })
  router.push('/');
}
</script>