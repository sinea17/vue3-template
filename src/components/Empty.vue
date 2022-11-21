<template>
  <el-empty :class="className" :image="getImageUrl('img-empty')" :description="description" />
</template>

<script lang="ts" setup>
import { getImageUrl } from '@/utils/util'

type sizeType = 'default' | 'small';
interface EmptyProps {
  size?: sizeType,
  description?: string
}
const props = withDefaults(defineProps<EmptyProps>(), {
  size: 'default',
  description: '当前暂无相关数据'
})

const className = computed(() => props.size == 'default' ? '' : 'el-empty-' + props.size)

</script>

<style lang="scss" scoped>
.el-empty {
  :deep(.el-empty__description) {
    margin-top: 27px;

    p {
      font-size: 22px;
      font-weight: bold;
      color: #404352;
      line-height: 1.5;
    }
  }

  :deep(.el-empty__image) {
    width: 300px;
  }

  &-small {

    :deep(.el-empty__description) {
      margin-top: 20px;

      p {
        font-size: 14px;
        font-weight: normal;
      }
    }

    :deep(.el-empty__image) {
      width: 200px;
    }
  }

  &-mini {

    :deep(.el-empty__description) {
      margin-top: 10px;

      p {
        font-size: 14px;
        font-weight: normal;
      }
    }

    :deep(.el-empty__image) {
      width: 120px;
    }
  }
}
</style>