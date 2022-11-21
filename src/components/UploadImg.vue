<template>
  <el-upload class="upload-img" :action="uploadUrl" :headers="uploadHeaders" :data="uploadData"
    accept="image/jpeg, image/jpg, image/png" :show-file-list="false" :on-success="onUploadSuccess"
    :before-upload="onBeforeUpload">
    <el-image v-if="props.imgUrl" :src="props.imgUrl" fit="cover" />
    <div v-else class="upload-placeholder">
      <SvgIcon name="add" size="20px" />
      上传图片
    </div>
  </el-upload>
</template>
  
<script lang='ts' setup>
import { GlobalStore } from "@/store/modules/global";
import { ElMessage, UploadProps } from "element-plus";

const emit = defineEmits(['update:imgUrl', 'success']);
const props = defineProps<{
  businessId: number;
  metaId: number;
  imgUrl?: string;
}>()

const globalStore = GlobalStore();

const uploadData = computed(() => {
  return {
    businessId: props.businessId,
    metaId: props.metaId
  }
})

const uploadHeaders = reactive({
  'authorization': globalStore.token
})
const uploadUrl = computed(() => import.meta.env.VITE_API_URL + '/manage/file/v1/upload_img')

const onUploadSuccess: UploadProps['onSuccess'] = (
  { data }
) => {
  // emit("update:imgUrl", data.urlPath);
  emit("success", data);
}
const onBeforeUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (['image/jpg', 'image/jpeg', 'image/png'].indexOf(rawFile.type) == -1) {
    ElMessage.error('请上传png、jpg格式的图片')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('文件最大不能超过2MB')
    return false
  }
  return true
}
</script>
  
<style lang='scss' scoped>
.upload-img {
  :deep(.el-upload) {
    width: 112px;
    height: 112px;
    border: 1px dashed #E6E6E6;
    background: #F7F7F7;
    box-sizing: border-box;

    &:focus {
      border-color: var(--el-color-primary);
      ;
    }
  }

  .upload-placeholder {
    width: 110px;
    height: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1;

    svg {
      margin-bottom: 10px;
    }
  }

  .el-image {
    width: 100%;
    height: 100%;
  }
}
</style>
  