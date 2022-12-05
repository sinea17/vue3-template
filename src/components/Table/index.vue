<template>
  <!-- 搜索表单 -->
  <TableForm :search="search" :reset="reset" :formParam="formParam" :paramList="paramList" :loading="loading" />
  <!-- 表格 -->
  <el-table ref="tableRef" :data="tableData" stripe v-loading="loading" v-bind="$attrs">
    <slot></slot>
    <template v-for="(item, index) in tableColumns" :key="index">
      <!-- <el-table-column v-bind="item"></el-table-column> -->
      <TableColumn :column="item">
        <template v-for="slot in Object.keys($slots)" #[slot]="scope">
          <slot :name="slot" :row="scope.row"></slot>
        </template>
      </TableColumn>
    </template>
    <template #empty>
      <Empty />
    </template>
  </el-table>
  <!-- 分页 -->
  <el-pagination layout="pager, sizes" :total="pageParam.total" :page-sizes="[5, 10, 15, 20]"
    :page-size="pageParam.pageSize" :current-page="pageParam.pageNo" @size-change="handleSizeChange"
    @current-change="handleCurrentChange" />

</template>
  
<script lang='ts' setup>
import useTable from "@/hooks/useTable";
import { SearchParam, ParamList, ColumnItem } from "./interface";
import { filterEnum } from "@/utils/util";
import { elementPlusEnum } from "@/utils/enumData";

export interface TableProps {
  api: (params: any) => Promise<any>; //请求表格数据的api
  dataFormatter?: (data: any) => any; //返回数据处理 
  searchParam?: SearchParam[];  //搜索参数
  columnList: ColumnItem[]; //表格列参数
  // events: { [key: string]: any }; //事件 
}

const props = withDefaults(defineProps<TableProps>(), {
  searchParam: () => ([])
})

const tableRef = ref();

const tableColumns = ref<ColumnItem[]>(props.columnList);

const paramList: ParamList[] = props.searchParam.map(item => {
  return {
    ...item,
    component: filterEnum(item.el, elementPlusEnum, { label: 'value', value: 'label' })
  }
})

const { search, reset, loading, formParam, tableData, getTableData, pageParam, handleSizeChange, handleCurrentChange } = useTable(props.api, props.searchParam, props.dataFormatter)

defineExpose({
  ref: tableRef,
  getTableData
})
</script>