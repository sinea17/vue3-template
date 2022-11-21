<template>
  <svg :style="style" aria-hidden="true">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script setup lang="ts">
interface SvgProps {
  name: string; // 图标的名称 ==> 必传
  prefix?: string; // 图标的前缀 ==> 非必传（默认为"icon"）
  iconStyle?: { [key: string]: any }; // 图标的样式 ==> 非必传
  size?: string
}
// 接收父组件参数并设置默认值
const props = withDefaults(defineProps<SvgProps>(), {
  prefix: "icon",
  size: "20px"
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
const style = computed(() => {
  if (props.iconStyle) return props.iconStyle
  if (props.size) return { width: props.size, height: props.size }
})
</script>