<template>
  <el-dialog v-model="dialogShow" custom-class="c-dialog" :show-close="false" width="720px" @closed="emit('close')">
    <template #header="{ close }">
      {{ props.title }}
      <SvgIcon name="close" size="22px" class="el-dialog-close" @click="close" />
    </template>
    <!-- 弹框内容 -->
    <slot />
    <template #footer v-if="$slots.footer">
      <slot name="footer" />
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:modelValue', 'close']);
const props = defineProps<{
  modelValue: boolean;
  title?: string;
}>()

const dialogShow = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit("update:modelValue", val);
  }
})
</script>

<style lang="scss">
.c-dialog {
  border-radius: 10px;

  .el-dialog__header {
    height: 54px;
    padding: 0 54px 0 16px;
    background: #F4F4F6;
    border-radius: 10px 10px 0 0;
    margin: 0;
    display: flex;
    align-items: center;
    position: relative;
    border-bottom: 1px solid #E6E6E6;
    box-sizing: border-box;
    font-weight: bold;
    color: #2C3EB2;

    &::before {
      content: '';
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #2C3EB2;
      margin-right: 8px;
    }
  }

  .el-dialog__footer {
    padding: 0 16px 16px;
  }

  .el-dialog__body {
    padding: 30px 48px;
  }

  .el-dialog-close {
    position: absolute;
    right: 16px;
    top: 16px;
    cursor: pointer;
  }
}
</style>