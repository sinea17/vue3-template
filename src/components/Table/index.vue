<template>
  <TableForm :search="search" :reset="reset" :formParam="formParam" :paramList="paramList" />
  <el-table :data="tableData" stripe>
    <slot></slot>
    <template v-for="(item, index) in tableColumns" :key="index">
      <el-table-column v-bind="item">

      </el-table-column>
    </template>
    <template #empty>
      <Empty />
    </template>
  </el-table>
</template>
  
<script lang='ts' setup>
import useTable from "@/hooks/useTable";
import { SearchParam, ParamList, ColumnItem } from "./interface";
import { filterEnum } from "@/utils/util";
import { elementPlusEnum } from "@/utils/enumData";

export interface TableProps {
  api: (params: any) => Promise<any>; //请求表格数据的api
  searchParam?: SearchParam[];  //搜索参数
  columnList: ColumnItem[]; //表格列参数
  // initParam?: { [key: string]: any };	//初始化请求参数，reactive包裹数据
}

const props = withDefaults(defineProps<TableProps>(), {
  searchParam: () => ([])
})

const tableColumns = ref<ColumnItem[]>(props.columnList);

const paramList: ParamList[] = props.searchParam.map(item => {
  return {
    ...item,
    component: filterEnum(item.el, elementPlusEnum, { label: 'value', value: 'label' })
  }
})

const { search, reset, formParam, tableData } = useTable(props.api, props.searchParam)
</script>