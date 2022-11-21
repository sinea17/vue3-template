<template>
  <el-container>
    <el-aside width="260px">
      <a href="./" class="logo">
        <img src="@/assets/images/img-logo-blue.png" alt="阳洋出行logo">
      </a>
      <el-scrollbar>
        <div :class="{ 'nav-item': true, 'active': navActive == item.path }" v-for="(item, index) in navList"
          :key="index" @click="handleNavItem(item.path)">
          {{ item.text }}</div>
      </el-scrollbar>
    </el-aside>
    <el-main>
      <el-scrollbar>
        <router-view />
      </el-scrollbar>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
const navList = reactive([
  {
    text: 'Home 首页',
    path: '/theme'
  }, {
    text: 'Button 按钮',
    path: '/theme/button'
  }, {
    text: 'Icon 业务图标',
    path: '/theme/icon'
  }, {
    text: 'CountDownUp 正倒计时',
    path: '/theme/countdownup'
  }, {
    text: 'Breadcrumb 面包屑',
    path: '/theme/breadcrumb'
  }, {
    text: 'Form 表单',
    path: '/theme/form'
  }, {
    text: 'Table 表格列表',
    path: '/theme/table'
  }, {
    text: 'Map 地图选点',
    path: '/theme/map'
  }, {
    text: 'Drawer 抽屉',
    path: '/theme/drawer'
  }, {
    text: 'Dialog 弹窗',
    path: '/theme/dialog'
  }
])
const route = useRoute();
const router = useRouter();
const navActive = computed(() => {
  return route.path
});
const handleNavItem = (path: any) => {
  router.push(path)
}
</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
}

.el-aside {
  padding-top: 64px;
  position: relative;

  .logo {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 64px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #404352;
    font-size: 16px;
    font-weight: bold;

    img {
      width: 80px;
      height: 40px;
      margin: 0 10px 0 22px;
    }
  }

}

.el-main {
  padding: 0;
}

.nav-item {
  line-height: 42px;
  padding: 0 10px 0 22px;
  border-radius: 0 50px 50px 0;
  cursor: pointer;
  width: 200px;
  box-sizing: border-box;

  &:hover {
    background: #f8f8f8;
  }

  &.active {
    background: linear-gradient(270deg, #324DFD 0%, white 300%);
    color: #fff;
    box-shadow: 0 3px 3px -2px rgba(58, 53, 65, 0.08), 0 3px 4px 0 rgba(58, 53, 65, 0.12), 0 1px 8px 0 rgba(58, 53, 65, 0.12);
  }

  &+& {
    margin-top: 6px;
  }

  &:first-child {
    margin-top: 6px;
  }

  &:last-child {
    margin-bottom: 6px;
  }
}
</style>

<route lang="yaml">
meta:
  title: 主题预览
  nologin: true
</route>