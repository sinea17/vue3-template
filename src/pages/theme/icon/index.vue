<template>
  <el-card>
    <el-space wrap :size="16">
      <div v-for="(item, index) in icons" :key="index">
        <el-tooltip :content="item">
          <SvgIcon :class="{ 'white-icon': whiteIcons.indexOf(item) > -1 }" :name="item" size="40px" />
        </el-tooltip>
      </div>
    </el-space>
  </el-card>
</template>
  
<script lang='ts' setup>
import ids from 'virtual:svg-icons-names';
const icons = computed(() => ids && ids.length ? ids.map((item: any) => item.slice(5)) : [])
const whiteIcons = reactive(['more', 'aside-menu-order-hall', 'aside-menu-workbench'])
</script>
  
<style lang='scss' scoped>
svg {
  border: 1px dashed #ddd;

  &.white-icon {
    background: #eee;
  }
}
</style>