<template>
  <el-card>
    <template #header>
      <h3>基础抽屉</h3>
    </template>
    <el-button type="primary" @click="hanleOpenOne">打开抽屉</el-button>
  </el-card>
  <el-card>
    <template #header>
      <h3>Tabs 抽屉</h3>
    </template>
    <el-button type="primary" @click="hanleOpenTwo">打开抽屉</el-button>
  </el-card>
  <el-card>
    <template #header>
      <h3>带底部按钮抽屉（适用于提交表单）</h3>
    </template>
    <el-button type="primary" @click="hanleOpenThree">打开抽屉</el-button>
  </el-card>

  <OneDrawer :ref="(el) => setItemRef(el, 'OneDrawerRef')" @openDrawer="openDrawer" />
  <TwoDrawer :ref="(el) => setItemRef(el, 'TwoDrawerRef')" @openDrawer="openDrawer" />
  <ThreeDrawer :ref="(el) => setItemRef(el, 'ThreeDrawerRef')" @openDrawer="openDrawer" />
</template>
  
<script lang='ts' setup>
import OneDrawer from "./components/OneDrawer.vue";
import TwoDrawer from "./components/TwoDrawer.vue";
import ThreeDrawer from "./components/ThreeDrawer.vue";

const hanleOpenOne = () => {
  openDrawer({
    page: 'OneDrawer',
    params: {
      // any data
    }
  })
}
const hanleOpenTwo = () => {
  openDrawer({
    page: 'TwoDrawer',
    params: {
      // any data
    }
  })
}
const hanleOpenThree = () => {
  openDrawer({
    page: 'ThreeDrawer',
    params: {
      // any data
    }
  })
}

// drawer页面集中控制 ----start
const drawerRefs: any = {}
const setItemRef = (el: any, key: string) => {
  if (el) {
    drawerRefs[key] = el
  }
}

interface openDrawerData {
  page: string;
  params?: any;
}
const openDrawer = (data: openDrawerData) => {
  const drawerRef = drawerRefs[`${data.page}Ref`]
  if (drawerRef) {
    drawerRef.initData(data.params || {})
  }
}
// drawer页面集中控制 ----end
</script>