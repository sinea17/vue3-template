<template>
  <el-aside width="88px">
    <div class="scroll">
      <el-scrollbar>
        <div :class="{ 'menu-item': true, 'active': menuActive == item.path }" v-for="(item,index) in menuList"
          :key="index" @click="handleMenuItem(item.path)">
          <SvgIcon :name="item.icon" size="20px" />
          {{ item.text }}
        </div>
      </el-scrollbar>
    </div>
    <div class="account-operation">
      <div class="avatar" ref="buttonRef" v-click-outside="onClickOutside">
        <SvgIcon name="more" size="20px" />
      </div>
    </div>
    <el-popover ref="popoverRef" :virtual-ref="buttonRef" trigger="click" virtual-triggering placement="right-end"
      width="150" :show-arrow="false" :teleported="false">
      <div class="pop-menu">
        <div class="account-info">
          <img class="avatar" src="@/assets/images/img-avatar.png">
          {{ userInfo.name }}
        </div>
        <div class="item" @click="handleLogOut">
          <i class="icon icon-1"></i>
          安全退出
        </div>
      </div>
      <div class="avatar" slot="reference"></div>
    </el-popover>
  </el-aside>
</template>

<script setup lang="ts">
import { ClickOutside as vClickOutside } from 'element-plus'
import { GlobalStore } from "@/store/modules/global";
import { ElMessage } from "element-plus";

interface MenuList {
  text: string,
  path: string,
  icon: string
}
const menuList: MenuList[] = reactive([
  //   {
  //   text: '接单大厅',
  //   path: '/orderHall',
  //   icon: 'aside-menu-order-hall'
  // }, 
  {
    text: '首页',
    path: '/',
    icon: 'aside-menu-workbench'
  }, {
    text: '测试页',
    path: '/test',
    icon: 'aside-menu-workbench'
  }])
const route = useRoute();
const router = useRouter();
const globalStore = GlobalStore();

const buttonRef = ref()
const popoverRef = ref()

const userInfo = computed(() => {
  return globalStore.userInfo
});

const menuActive = computed(() => {
  return route.path
});

const handleMenuItem = (path: any) => {
  router.push(path)
}
const onClickOutside = () => {
  unref(popoverRef).popperRef?.delayHide?.()
}

const handleLogOut = () => {
  ElMessage.success('退出成功')
  globalStore.removeToken()
  globalStore.removeUserInfo()
  router.push('/login')
}

onMounted(() => {
  // console.log(router.options.routes)
})

</script>

<style lang="scss" scoped>
.el-aside {
  background: #2C3EB2;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  .scroll {
    flex: 1;
    height: 0;
    width: 100%;

    :deep(.el-scrollbar) {
      height: 100%;

      .el-scrollbar__wrap {
        overflow-x: hidden;
      }
    }
  }

  :deep(.el-popover.el-popper) {
    border-radius: 10px;
    padding: 0;
  }
}

.menu-item {
  width: 68px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #fff;
  border-radius: 8px;
  line-height: 1;
  opacity: .7;
  margin: auto;
  cursor: pointer;

  &+& {
    margin-top: 20px;
  }

  &:first-child {
    margin-top: 30px;
  }

  &:last-child {
    margin-bottom: 30px;
  }

  &.active {
    background: #203096;
    opacity: 1;
  }

  &:hover {
    opacity: 1;
  }

  svg {
    margin-bottom: 8px;
  }
}

.account-operation {
  width: 50px;
  height: 50px;
  margin: 25px 0;

  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 5px solid rgba(255, 255, 255, 0.1);
    background: url(../../assets/images/img-avatar.png) center / cover no-repeat;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;

    svg {
      display: none;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
    }

    &:hover {
      &::before {
        content: '';
        position: absolute;
        left: -5px;
        top: -5px;
        right: -5px;
        bottom: -5px;
        border-radius: 50%;
        background: rgba(33, 35, 46, 0.8);
        z-index: 1;
      }

      svg {
        display: block;
      }
    }

  }
}

.pop-menu {
  overflow: hidden;
  border-radius: 0 0 10px 10px;

  .account-info {
    margin: 4px 8px 0;
    height: 44px;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    color: #404352;
    border-bottom: 1px solid #E6E6E6;

    .avatar {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin-right: 8px;
    }
  }

  .item {
    display: flex;
    align-items: center;
    padding: 0 8px;
    height: 36px;
    font-size: 12px;
    color: #404352;
    cursor: pointer;

    &:hover {
      background: #f7f7f7;
    }

    .icon {
      width: 16px;
      height: 16px;
      margin-right: 8px;

      &-1 {
        // background-image: url(../../assets/image/icon-account-operation-01.png);
      }
    }
  }
}
</style>