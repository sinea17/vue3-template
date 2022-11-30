<template>
  <div>
    <TableForm :search="search" :reset="reset" :formParam="formParam" :paramList="paramList" />
    <el-button @click="reset">重置</el-button>
  </div>
</template>
  
<script lang='ts' setup>
import useTable from "@/hooks/useTable";
import { SearchParam, ParamList } from "./interface";
import { filterEnum } from "@/utils/util";
import { elementPlusEnum } from "@/utils/enumData";

export interface TableProps {
  api: (params: any) => Promise<any>; //请求表格数据的api
  searchParam?: SearchParam[];		//搜索参数
  initParam?: { [key: string]: any };	//初始化请求参数，reactive包裹数据
}

const props = withDefaults(defineProps<TableProps>(), {
  searchParam: () => ([])
})

const paramList: ParamList[] = props.searchParam.map(item => {
  return {
    ...item,
    component: filterEnum(item.el, elementPlusEnum, { label: 'value', value: 'label' })
  }
})

const { search, reset, formParam } = useTable(props.api, props.searchParam)
</script>