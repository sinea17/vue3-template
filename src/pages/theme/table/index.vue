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
    <el-card>
      <template #header>
        <h3 @click="test">开箱即用表格组件</h3>
      </template>
      <Table ref="tableRef" :api="OrderService.getAllDriverOrder" :searchParam="searchParam" :columnList="columnList"
        :dataFormatter="dataFormatter" highlightCurrentRow @row-click="handleRow">
        <template #receivableMoney="scope">
          <el-button type="primary" link>
            {{ scope.row.receivableMoney }}
          </el-button>
        </template>
        <template #address="scope">
          <div>{{ scope.row.originAddr }}</div>
          <div>{{ scope.row.destAddr }}</div>
        </template>
        <template #node="scope">
          <template v-if="scope.row.orderState == 4">
            <CountDownUp v-if="scope.row.freeDuration" :duration="scope.row.freeDuration" @finish="onFinish(scope.row)"
              v-slot="timeObj">
              免费取车时间
              <div class="countdown">
                <span data-text="时" v-if="timeObj.hours">{{ timeObj.hours }}</span>
                <span data-text="分" v-if="timeObj.minutes || timeObj.hours">{{ timeObj.minutes }}</span>
                <span data-text="秒">{{ timeObj.seconds
                }}</span>
              </div>
            </CountDownUp>
            <CountDownUp v-if="!scope.row.freeDuration" :duration="scope.row.outDuration || 0" countup v-slot="timeObj">
              取车超时
              <div class="countup">
                <span data-text="时" v-if="timeObj.hours">{{ timeObj.hours }}</span>
                <span data-text="分" v-if="timeObj.minutes || timeObj.hours">{{ timeObj.minutes }}</span>
                <span data-text="秒">{{ timeObj.seconds
                }}</span>
              </div>
            </CountDownUp>
          </template>
          <span v-else>--</span>
        </template>
      </Table>
    </el-card>
  </el-space>
</template>
  
<script lang='tsx' setup>
import OrderService from "@/api/modules/order";
import AuthService from "@/api/modules/auth";
import { timeshareOrderStateEnum } from "@/utils/enumData";
import { SearchItem, ColumnItem } from "@/components/Table/interface";
import SvgIcon from "@/components/SvgIcon.vue";
import CountDownUp from "@/components/CountDownUp.vue";
import { businessFilter, businessFormatter, moneyFormatter } from "@/utils/filter";
import { filterEnum } from "@/utils/util";


const searchParam: SearchItem[] = [
  {
    key: 'fuzzySearch',
    el: "input",
    placeholder: '搜索内容',
    slots: [
      {
        name: 'prefix',
        render: () => {
          return (
            <SvgIcon name="search" size="16px" />
          );
        }
      }
    ]
  }, {
    key: 'timeRanges',
    el: "date-picker",
    type: "daterange",
    valueFormat: "YYYY-MM-DD",
    events: {
      change: (val: any) => {
        tableRef.value.formParam.startTime = val && val[0]
        tableRef.value.formParam.endTime = val && val[1]
      }
    }
  }, {
    key: 'takingType',
    defaultValue: 1
  }, {
    key: 'businessId',
    defaultValue: 6
  }
]

const columnList: ColumnItem[] = [
  {
    prop: 'orderNo',
    label: '订单编号',
    minWidth: '215px'
  }, {
    prop: 'businessId',
    label: '业务',
    formatter: businessFormatter
  }, {
    prop: 'orderState',
    label: '状态',
    render: (scope) => {
      return (
        <span class={'state state-' + scope.row.orderState}>
          {filterEnum(scope.row.orderState, timeshareOrderStateEnum)}
        </span>
      )
    }
  }, {
    prop: 'node',
    label: '节点'
  }, {
    prop: 'address',
    label: '地址',
    headerRender: (row: ColumnItem) => {
      return (
        <el-button type="primary">
          {row.label}
        </el-button>
      )
    }
  }, {
    prop: 'receivableMoney',
    label: '订单金额',
    formatter: moneyFormatter
  }
]
const tableRef = ref();
const test = () => {
  tableRef.value.getTableData()
}
const handleRow = (row: any) => {
  console.log(row)
}

let freeTime = 0;//免费时长（单位毫秒）
const dataFormatter = async (data: any, currentTime: string) => {
  if (!freeTime) {
    //获取免费时长配置（分钟）
    const configRes: any = await AuthService.getConfig('TIME_SHARING_FREE_PICKUP_TIME')
    freeTime = configRes.data.paramValue * 60000
    // freeTime = 25 * 60 * 60000 + 3730 * 1000
  }
  data = data.map((item: any) => {
    if (item.orderState == 4) {
      const diff: number = new Date(currentTime).getTime() - new Date(item.gmtCreate).getTime()
      item.freeDuration = freeTime > diff ? freeTime - diff : 0
      item.outDuration = freeTime > diff ? 0 : diff - freeTime
    }
    return item
  })
  return data
}


const onFinish = (row: any) => {
  console.log('倒计时结束', row)
  row.freeDuration = 0
}


const inputValue1 = ref('123')
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
  