<template>
  <Drawer v-model="drawer" title="基础抽屉">
    <el-scrollbar v-loading="drawerLoading">
      <Empty size="small" />
    </el-scrollbar>
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
  