<template>
  <component :is="columnRender(column)"></component>
</template>
  
<script lang='tsx' setup>
import { ElTableColumn } from "element-plus";
import { ColumnItem } from "../interface";
defineProps<{ column: ColumnItem }>();

// 获取插槽内容
const slots = useSlots();

const columnRender = (item: ColumnItem) => {
  return (
    <ElTableColumn {...item} >
      {{
        //渲染顺序：render > slots > formatter > defualt
        default: item.formatter && !item.render && !slots[item.prop] ? null : (scope: any) => {
          if (item.render) return item.render(scope);
          if (slots[item.prop]) return slots[item.prop!]!(scope);
          return scope.row[item.prop]
        },
        header: () => {
          if (item.headerRender) return item.headerRender(item);
          if (slots[`${item.prop}Header`]) return slots[`${item.prop}Header`]!({ row: item });
          return item.label;
        }
      }}
    </ElTableColumn>
  )
}
</script>