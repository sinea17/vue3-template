<template>
  <el-card>
    <template #header>
      <h3>基础选点</h3>
    </template>
    <el-button @click="mapChooseVisible1 = true" type="primary">打开地图</el-button>
    <div>
      <p>地标地址：{{ mapForm1.name || '--' }}</p>
      <p>详细地址：{{ mapForm1.address || '--' }}</p>
      <p>坐标经度：{{ mapForm1.longitude || '--' }}</p>
      <p>坐标纬度：{{ mapForm1.latitude || '--' }}</p>
    </div>

    <MapChoose mapId="map1" v-model="mapChooseVisible1" @confirm="hanleMapChooseConfirm1" />
  </el-card>
  <el-card>
    <template #header>
      <h3>选点传入地址信息</h3>
    </template>
    <el-button @click="hanleOpenMapChoose2" type="primary">打开地图</el-button>
    <div>
      <p>地标地址：{{ mapForm2.name || '--' }}</p>
      <p>详细地址：{{ mapForm2.address || '--' }}</p>
      <p>坐标经度：{{ mapForm2.longitude || '--' }}</p>
      <p>坐标纬度：{{ mapForm2.latitude || '--' }}</p>
    </div>

    <MapChoose mapId="map2" v-model="mapChooseVisible2" @confirm="hanleMapChooseConfirm2" :location="mapLocation" />
  </el-card>
</template>
  
<script lang='ts' setup>
// mapId选传，同时使用多个地图组件时才需要传入mapId！！！
const mapChooseVisible1 = ref(false)
const mapForm1 = reactive({
  name: '',
  address: '',
  latitude: '',
  longitude: ''
})

const hanleMapChooseConfirm1 = (location: any) => {
  mapForm1.name = location.name
  mapForm1.address = location.address
  mapForm1.latitude = location.latitude
  mapForm1.longitude = location.longitude
}


const mapChooseVisible2 = ref(false)
const mapLocation: any = reactive({})
const mapForm2 = reactive({
  name: '河畔星辉',
  address: '四川省成都市金牛区星辉西路9号',
  latitude: 30.679928703331882,
  longitude: 104.07356941833602
})
const hanleOpenMapChoose2 = () => {
  mapLocation.name = mapForm2.name
  mapLocation.address = mapForm2.address
  mapLocation.latitude = mapForm2.latitude
  mapLocation.longitude = mapForm2.longitude
  mapChooseVisible2.value = true
}
const hanleMapChooseConfirm2 = (location: any) => {
  mapForm2.name = location.name
  mapForm2.address = location.address
  mapForm2.latitude = location.latitude
  mapForm2.longitude = location.longitude
}
</script>
  
<style lang='scss' scoped>

</style>