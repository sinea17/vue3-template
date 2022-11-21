<template>
  <Drawer v-model="drawer" title="带底部按钮弹窗（适用于提交表单）">
    <el-scrollbar v-loading="drawerLoading">
      <Empty size="small" />
    </el-scrollbar>
    <template #footer>
      <el-button @click="drawer = false">取消</el-button>
      <el-button type="primary">保存</el-button>
    </template>
  </Drawer>
</template>
  
<script lang='ts' setup>
// 暴露触发事件
const emit = defineEmits(['openDrawer'])

const drawer = ref(false)
const drawerLoading = ref(false)

// 模拟获取数据
const getData = () => {
  drawerLoading.value = true
  setTimeout(() => {
    drawerLoading.value = false
  }, 1000);
}

const initData = (params: any) => {
  drawer.value = true
  getData()
}
// 暴露接收事件
defineExpose({
  initData
});
</script>
  
<style lang='stylus' scoped></style>
  