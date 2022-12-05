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
    <ElTableColumn {...item}>
      {{
        default: (scope: any) => {
          if (item.render) return item.render(scope);
          if (slots[item.prop]) return slots[item.prop!]!(scope);
          if (item.formatter) return item.formatter(scope.row[item.prop])
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