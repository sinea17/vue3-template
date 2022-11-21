<template>
  <Drawer v-model="drawer" :with-header="false" @close="activeName = 'A'">
    <el-tabs v-model="activeName" class="drawer-tabs">
      <el-tab-pane label="A页面" name="A">
        <Empty size="small" description="A页面" />
      </el-tab-pane>
      <el-tab-pane label="B页面" name="B" white>
        <Empty size="small" description="B页面（白色背景）" />
      </el-tab-pane>
      <el-tab-pane label="C页面" name="C">
        <Empty size="small" description="C页面" />
      </el-tab-pane>
    </el-tabs>
  </Drawer>
</template>
  
<script lang='ts' setup>
// 暴露触发事件
const emit = defineEmits(['openDrawer'])

const drawer = ref(false)
const activeName = ref('A')

const initData = (params: any) => {
  drawer.value = true
}
// 暴露接收事件
defineExpose({
  initData
});
</script>
  
<style lang='stylus' scoped></style>
  