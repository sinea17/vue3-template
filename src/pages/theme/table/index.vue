<template>
  <el-space direction="vertical" alignment="start" :fill="true">
    <el-card>
      <template #header>
        <h3>基础列表</h3>
      </template>
      <!-- 数据表格 -->
      <el-table :data="tableData" stripe>
        <el-table-column prop="date" label="Date" />
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="address" label="Address" />
      </el-table>
      <el-pagination layout="pager, sizes" :total="50" :page-sizes="[5, 10, 15, 20]" />
    </el-card>
    <el-card>
      <template #header>
        <h3>搜索列表</h3>
      </template>
      <!-- 筛选表单 -->
      <el-form :inline="true">
        <el-form-item>
          <el-input v-model="inputValue1" placeholder="搜索内容" clearable>
            <template #prefix>
              <SvgIcon name="search" size="16px" />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item btn>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
      <!-- 数据表格 -->
      <el-table :data="tableData" stripe>
        <el-table-column prop="date" label="Date" />
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="address" label="Address" />
      </el-table>
      <el-pagination layout="pager, sizes" :total="50" :page-sizes="[5, 10, 15, 20]" />
    </el-card>
    <el-card>
      <template #header>
        <h3>搜索+右侧操作按钮</h3>
      </template>
      <!-- 筛选表单 -->
      <div class="c-search-form">
        <el-form :inline="true">
          <el-form-item>
            <el-input v-model="inputValue1" placeholder="搜索内容" clearable>
              <template #prefix>
                <SvgIcon name="search" size="16px" />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item btn>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </el-form>
        <div class="c-search-form-sub">
          <el-button>导出数据</el-button>
        </div>
      </div>
      <!-- 数据表格 -->
      <el-table :data="tableData" stripe>
        <el-table-column prop="date" label="Date" />
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="address" label="Address" />
      </el-table>
      <el-pagination layout="pager, sizes" :total="50" :page-sizes="[5, 10, 15, 20]" />
    </el-card>
  </el-space>
</template>
  
<script lang='ts' setup>

const inputValue1 = ref('')
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
  
<style lang='scss' scoped>
.el-space {
  width: 100%;
}

:deep(.el-space__item) {
  width: 0;
}
</style>
  