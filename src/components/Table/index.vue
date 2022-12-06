<template>
  <!-- 搜索表单 -->
  <TableForm :search="search" :reset="reset" :formParam="formParam" :searchParam="searchParam" :loading="loading" />
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
import { SearchItem, ColumnItem } from "./interface";

export interface TableProps {
  api: (params: any) => Promise<any>; //请求表格数据的api
  dataFormatter?: (data: any) => any; //返回数据处理 
  searchParam?: SearchItem[];  //搜索参数
  columnList: ColumnItem[]; //表格列参数
}

const props = withDefaults(defineProps<TableProps>(), {
  searchParam: () => ([])
})

const tableRef = ref();

const tableColumns = ref<ColumnItem[]>(props.columnList);

const { search, reset, loading, formParam, tableData, getTableData, pageParam, handleSizeChange, handleCurrentChange } = useTable(props.api, props.searchParam, props.dataFormatter)

defineExpose({
  ref: tableRef,
  getTableData,
  formParam
})
</script>