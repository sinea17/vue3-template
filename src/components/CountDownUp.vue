<template>
  <div>
    <slot v-bind="current"></slot>
  </div>
</template>
  
<script lang='ts' setup>
//参考naive-ui countdown

const emit = defineEmits(['finish'])
const props = defineProps<{
  duration: number;   //倒计时持续时间（单位毫秒 非响应式）
  countup?: boolean; //是否正计时
}>()

const distanceRef = ref(0)  //ms
const current = computed(() => getTimeInfo(distanceRef.value));

watchEffect(() => {
  distanceRef.value = props.duration
})

let timerId: any = null;//setTimeout
let pnow = -1;//打开网页时间 高精度

const getDistance = (time: DOMHighResTimeStamp): number => {
  return props.countup ? props.duration - pnow + time : props.duration + pnow - time
}
const getTimeInfo = (distance: number) => {
  const hours = Math.floor(distance / 3600000)
  const minutes = Math.floor((distance % 3600000) / 60000)
  const seconds = Math.floor((distance % 60000) / 1000)
  return {
    hours,
    minutes,
    seconds
  }
}
const frame = (): void => {
  const distance = getDistance(performance.now())
  if (distance <= 0 && !props.countup) {
    distanceRef.value = 0
    stopTimer()
    emit('finish', 0)
    return
  }
  let leftTime = distance % 1000

  distanceRef.value = distance
  timerId = window.setTimeout(() => {
    frame()
  }, 1000)
}
const stopTimer = (): void => {
  if (timerId !== null) {
    window.clearTimeout(timerId)
    timerId = null
  }
}

onMounted(() => {
  watchEffect(() => {
    stopTimer()//暂停之前的倒计时
    if (!props.duration && !props.countup) return
    pnow = performance.now()
    frame()
  })
})
onBeforeUnmount(() => {
  stopTimer()
})
</script>

  