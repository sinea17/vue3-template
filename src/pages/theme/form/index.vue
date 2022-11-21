<template>
  <div class="theme-page">
    <el-space direction="vertical" alignment="start" :fill="true">
      <el-card>
        <template #header>
          <h3>行内表单</h3>
        </template>
        <el-form :inline="true">
          <el-form-item label="输入框">
            <el-input v-model.trim="topForm.inputValue1" placeholder="请输入" clearable />
          </el-form-item>
          <el-form-item label="选择器">
            <el-select v-model="topForm.inputValue2" placeholder="请选择" clearable>
              <el-option label="选项1" value="1" />
              <el-option label="选项2" value="2" />
            </el-select>
          </el-form-item>
          <el-form-item label="日期范围">
            <el-date-picker v-model="topForm.timeRanges" :default-time="defaultTime" type="daterange"
              range-separator="-" start-placeholder="开始时间" end-placeholder="结束时间" value-format="YYYY-MM-DD HH:mm:ss"
              clearable />
          </el-form-item>
          <el-form-item btn>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </el-form>
      </el-card>
      <el-card>
        <template #header>
          <h3>顶部对齐（适用于Drawer抽屉、Dialog弹窗）</h3>
        </template>
        <el-form label-position="top">
          <el-form-item label="输入框">
            <el-input v-model.trim="topForm.inputValue1" placeholder="请输入" size="large" clearable />
          </el-form-item>
          <el-form-item label="选择器">
            <el-select v-model="topForm.inputValue2" placeholder="请选择" size="large" clearable>
              <el-option label="选项1" value="1" />
              <el-option label="选项2" value="2" />
            </el-select>
          </el-form-item>
          <el-form-item label="日期范围">
            <el-date-picker v-model="topForm.timeRanges" :default-time="defaultTime" type="daterange"
              range-separator="-" start-placeholder="开始时间" end-placeholder="结束时间" value-format="YYYY-MM-DD HH:mm:ss"
              size="large" clearable />
          </el-form-item>
          <el-form-item prop="parkingImg" label="停车场照片">
            <UploadImg :businessId="6" :metaId="260055" :imgUrl="topForm.img" @success="onUploadSuccess" />
          </el-form-item>
        </el-form>
      </el-card>
    </el-space>
  </div>
</template>

<script setup lang="ts">
const topForm = reactive({
  inputValue1: '',
  inputValue2: '',
  timeRanges: '',
  img: '',
  mediaRels: {}
})
const defaultTime = ref<[Date, Date]>([
  new Date(2000, 1, 1, 0, 0, 0),
  new Date(2000, 2, 1, 23, 59, 59),
])

const onUploadSuccess = (data: any) => {
  topForm.img = data.urlPath
  topForm.mediaRels = {
    mediaType: 1,
    oneTag: 260000,
    twoTag: 260055,
    path: data.relativePath,
    storeScheme: data.storeScheme
  }
}
</script>
  
<style lang="scss" scoped>
.el-space {
  width: 100%;
}

:deep(.el-space__item) {
  width: 0;
}
</style>