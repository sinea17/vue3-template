<template>
  <el-card>
    <template #header>
      <h3>倒计时</h3>
    </template>
    <CountDownUp :duration="70000" @finish="onFinish" v-slot="timeObj">
      <span v-if="timeObj.hours">{{ timeObj.hours }}时</span>
      <span v-if="timeObj.minutes || timeObj.hours">{{ timeObj.minutes }}分</span>
      <span>{{ timeObj.seconds
      }}秒</span>
    </CountDownUp>
  </el-card>
  <el-card>
    <template #header>
      <h3>正计时</h3>
    </template>
    <CountDownUp :duration="0" countup v-slot="timeObj">
      <span v-if="timeObj.hours">{{ timeObj.hours }}时</span>
      <span v-if="timeObj.minutes || timeObj.hours">{{ timeObj.minutes }}分</span>
      <span>{{ timeObj.seconds
      }}秒</span>
    </CountDownUp>
  </el-card>
</template>
  
<script lang='ts' setup>
import { ElMessage } from "element-plus";
const onFinish = () => {
  ElMessage.error('倒计时结束')
}
</script>