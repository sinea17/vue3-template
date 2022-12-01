<template>
  <component :is="columnRender(column)"></component>
</template>
  
<script lang='tsx' setup>
import { ElTableColumn } from "element-plus";
import { ColumnItem } from "../interface";
defineProps<{ column: ColumnItem }>();
const columnRender = (item: ColumnItem) => {
  return (
    <ElTableColumn>

    </ElTableColumn>
  )
}
</script>