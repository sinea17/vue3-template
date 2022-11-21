<template>
  <el-card>
    <template #header>
      <h3>基础弹窗</h3>
    </template>
    <el-button type="primary" @click="dialogVisible1 = true">打开弹窗</el-button>
  </el-card>
  <el-card>
    <template #header>
      <h3>带底部按钮弹窗（适用于提交表单）</h3>
    </template>
    <el-button type="primary" @click="dialogVisible2 = true">打开弹窗</el-button>
  </el-card>

  <Dialog v-model="dialogVisible1" title="基础弹窗">
    弹窗内容
  </Dialog>
  <Dialog v-model="dialogVisible2" title="带底部按钮弹窗（适用于提交表单）">
    弹窗内容
    <template #footer>
      <el-button @click="dialogVisible2 = false">取消</el-button>
      <el-button type="primary">确定</el-button>
    </template>
  </Dialog>
</template>
  
<script lang='ts' setup>
const dialogVisible1 = ref(false)
const dialogVisible2 = ref(false)
</script>