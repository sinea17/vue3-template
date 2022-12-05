<template>
  <el-card>
    <template #header>
      <h3>登录页</h3>
    </template>
    <el-form :inline="true">
      <el-form-item>
        <el-input v-model="token" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script lang="ts" setup>
import { GlobalStore } from "@/store/modules/global";
import { ElMessage } from "element-plus";
const globalStore = GlobalStore();
const router = useRouter();
const token = ref()
const handleLogin = () => {
  if (!token.value) {
    ElMessage.error('请输入token')
    return
  }
  globalStore.setToken(token.value)
  globalStore.setUserInfo({
    name: '测试账号',
    enterpriseName: '测试公司名称',
    starLevel: 3
  })
  router.push('/');
}
</script>