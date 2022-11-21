<template>
  <el-drawer v-model="drawerShow" custom-class="c-drawer" size="375px" :destroy-on-close="true" :show-close="false"
    :close-on-press-escape="false" :with-header="props.withHeader" modal-class="transparent-overlay"
    @open="emit('open')" @close="emit('close')">
    <template #header="{ close }">
      {{ props.title }}
      <SvgIcon name="close" size="22px" class="el-drawer-close" @click="close" />
    </template>
    <SvgIcon v-if="!props.withHeader" name="close" size="22px" class="el-drawer-close" @click="drawerShow = false" />
    <slot />
    <template #footer v-if="$slots.footer">
      <slot name="footer" />
    </template>
  </el-drawer>
</template>
  
<script lang='ts' setup>
interface DrawerProps {
  modelValue: boolean;
  title?: string;
  withHeader?: boolean;
}

const emit = defineEmits(['update:modelValue', 'open', 'close'])
const props = withDefaults(defineProps<DrawerProps>(), {
  withHeader: true
})

const drawerShow = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit("update:modelValue", val);
  }
})
</script>
  
<style lang="scss">
.c-drawer {
  &.el-drawer {
    box-shadow: -2px 0px 20px rgba(33, 35, 46, 0.2);
  }

  .el-drawer__header {
    margin: 0;
    padding: 16px 54px 0 16px;
    height: 54px;
    box-sizing: border-box;

    .title {
      color: #404352;
    }
  }

  .el-drawer-close {
    position: absolute;
    right: 16px;
    top: 24px;
    z-index: 1;
    cursor: pointer;
  }

  .el-drawer__body {
    background: #F5F5F5;
    padding: 0;
  }

  .el-drawer__footer {
    padding-top: 11px;
    border-top: 1px solid #E6E6E6;
    box-sizing: border-box;
    height: 60px;
  }

  .drawer-tabs {
    height: 100%;
    display: flex;
    flex-direction: column;

    &>.el-tabs__header {
      padding-right: 54px;
      border: none;

      .el-tabs__nav-wrap {
        margin: 0;
      }

      .el-tabs__nav-next,
      .el-tabs__nav-prev {
        padding-top: 13px;
      }

      .el-tabs__item {
        padding-top: 26px;
        height: 54px;
      }
    }

    &>.el-tabs__content {
      flex: 1;

      .el-tab-pane {
        height: 100%;

        &[white] {
          background: #fff;
        }
      }
    }
  }

  .el-form {
    padding: 16px 24px;
    border-top: 8px solid #F7F7F7;
  }
}
</style>