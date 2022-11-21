<template>
  <Dialog v-model="dialogShow" title="地图选点">
    <div class="map-panel">
      <div :id="props.mapId" class="map"></div>
      <div class="search-box">
        <el-autocomplete v-model="keyword" :fetch-suggestions="handleSearch" :trigger-on-focus="false" clearable
          placeholder="输入(城市)关键字搜索" @select="handleSelect" style="width: 300px" />
        <!-- <el-input v-model="location.longitude" placeholder="点击地图选择经度" maxlength="15" readonly
          style="width: 150px; margin: 0 5px"></el-input>
        <el-input v-model="location.latitude" placeholder="点击地图选择纬度" maxlength="15" readonly style="width: 150px">
        </el-input> -->
      </div>
    </div>
    <template #footer>
      <div class="address-text" data-text="地标名称：">{{ location.name || '--' }}</div>
      <div class="address-text" data-text="详细地址：">{{ location.address || '--' }}</div>
      <el-button @click="dialogShow = false">取消</el-button>
      <el-button type="primary" @click="handleConfirm">确定</el-button>
    </template>
  </Dialog>
</template>
  
<script lang='ts' setup>
import { ElMessage } from "element-plus";
import AMapLoader from '@amap/amap-jsapi-loader';
import gcoord from 'gcoord'
// 参考文章 https://juejin.cn/post/7111718174118117390
const emit = defineEmits(['update:modelValue', 'confirm'])

interface MapProps {
  modelValue: boolean;
  location?: any;
  mapId?: string;
}
const props = withDefaults(defineProps<MapProps>(), {
  modelValue: false,
  mapId: 'map'
})

const map: any = shallowRef(null);
const location = reactive({
  longitude: 0,
  latitude: 0,
  address: '',
  name: ''
});
const keyword = ref('');
let placeSearch: any, AMapObj: any, marker: any, geocoder: any;

watch(location, (val: any) => {
  if (val.longitude && val.latitude) {
    drawMarker();
  }
});
watch(() => props.modelValue, (val) => {
  if (val) initMap();
  else {
    keyword.value = ''
    location.longitude = 0
    location.latitude = 0
    location.address = ''
    location.name = ''
  }
})
watch(() => keyword.value, (val) => {
  if (!val) placeSearch.clear()
})

const dialogShow = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit("update:modelValue", val);
  }
})

function initMap() {
  AMapLoader.load({
    key: 'e45f179a1d2b4cef5041d2f16cc4d1b3', // 申请好的Web端Key，首次调用 load 时必填
    version: '2.0'
  }).then(async AMap => {
    AMapObj = AMap;
    map.value = new AMap.Map(props.mapId);
    // 添加点击事件
    let isClickHots = false
    map.value.on('click', (val: any) => onMapClick(val, isClickHots));
    map.value.on('hotspotclick', (val: any) => onMapHotsClick(val, isClickHots));
    map.value.on('hotspotover', () => { isClickHots = true })
    map.value.on('hotspotout', () => { isClickHots = false })

    if (props.location) {
      // drawMarker(props.location);
      let position = await gcoord.transform([props.location.longitude, props.location.latitude], gcoord.WGS84, gcoord.GCJ02)
      location.longitude = position[0]
      location.latitude = position[1]
      location.address = props.location.address
      location.name = props.location.name
    }

    AMap.plugin(
      ['AMap.ToolBar', 'AMap.Scale', 'AMap.Geolocation', 'AMap.PlaceSearch', 'AMap.Geocoder'],
      () => {
        // 缩放条
        const toolbar = new AMap.ToolBar();
        // 比例尺
        const scale = new AMap.Scale();
        // 定位
        const geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          position: 'RT', //定位按钮的停靠位置
          zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点
          showCircle: false
        });
        geocoder = new AMap.Geocoder({
          city: '全国',
        });
        map.value.addControl(geolocation);
        map.value.addControl(toolbar);
        map.value.addControl(scale);
        placeSearch = new AMap.PlaceSearch({
          map: map.value,
          city: '510100',//成都
          pageSize: 30, // 单页显示结果条数
          pageIndex: 1, // 页码
          citylimit: false, // 是否强制限制在设置的城市内搜索
          autoFitView: true
        });
        geolocation.getCurrentPosition()
        placeSearch.on('markerClick', (e: any) => {
          console.log('点击搜索marker', e)
          const { pname, cityname, adname, address, name } = e.data
          location.longitude = e.data.location.lng
          location.latitude = e.data.location.lat
          location.address = pname + cityname + adname + address
          location.name = name
        })
      }
    );
  })
}
// 搜索地图
function handleSearch(queryString: any, cb: any) {
  placeSearch.search(queryString, (status: any, result: any) => {
    if (result && typeof result === 'object' && result.poiList) {
      const list = result.poiList.pois;
      list.forEach((item: any) => {
        item.value = item.name;
        item.label = item.name;
      });
      cb(list);
    } else { cb([]) }
  });
}
// 点击地图
function onMapClick(e: any, isClickHots: boolean) {
  if (isClickHots) return
  // console.log('点击地图', e, isClickHots)
  keyword.value = ''
  const { lng, lat } = e.lnglat;
  // 逆地理编码
  geocoder.getAddress([lng, lat], (status: any, result: any) => {
    if (status === 'complete' && result.info === 'OK') {
      const { addressComponent, formattedAddress } = result.regeocode;
      let { city, province, district } = addressComponent;
      if (!city) {
        // 直辖市
        city = province;
      }
      location.longitude = lng
      location.latitude = lat
      location.address = formattedAddress
      location.name = formattedAddress
    }
  });
}
// 点击热点
function onMapHotsClick(e: any, isClickHots: boolean) {
  // console.log('点击热点', e, isClickHots)
  keyword.value = ''
  const { lng, lat } = e.lnglat;
  // 逆地理编码
  geocoder.getAddress([lng, lat], (status: any, result: any) => {
    if (status === 'complete' && result.info === 'OK') {
      const { addressComponent, formattedAddress } = result.regeocode;
      let { city, province, district } = addressComponent;
      if (!city) {
        // 直辖市
        city = province;
      }
      location.longitude = lng
      location.latitude = lat
      location.address = formattedAddress
      location.name = e.name.replace(/\s/g, "");
    }
  });
}
// 点击搜索项
function handleSelect(item: any) {
  // console.log('点击搜索项', item)
  const { pname, cityname, adname, address, name } = item;
  const { lng, lat } = item.location;
  location.longitude = lng
  location.latitude = lat
  location.address = pname + cityname + adname + address
  location.name = name
  map.value.setZoomAndCenter(16, [lng, lat]);
}
// 绘制地点marker
function drawMarker(val?: any) {
  const { longitude, latitude } = location.longitude ? location : val;
  if (marker) {
    marker.setMap(null);
  }
  marker = new AMapObj.Marker({
    position: new AMapObj.LngLat(longitude, latitude),
    anchor: 'bottom-center',
  });
  map.value.add(marker);
  map.value.setZoomAndCenter(16, [longitude, latitude]);
}

const handleConfirm = async () => {
  if (!location.longitude) {
    ElMessage.error('请选择定位');
    return
  }
  let position = await gcoord.transform([location.longitude, location.latitude], gcoord.GCJ02, gcoord.WGS84)
  emit('confirm', {
    ...location,
    longitude: position[0],
    latitude: position[1]
  })
  dialogShow.value = false
}
</script>

<style lang="scss" scoped>
.map-panel {
  height: 400px;
  position: relative;

  .map {
    height: 100%;
    border-radius: 10px;
    background: rgb(247, 247, 247);
  }

  .search-box {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 1;
    display: flex;
    align-items: center;
  }
}

.address-text {
  text-align: left;
  padding: 0 32px;
  display: flex;
  word-break: break-all;
  margin-bottom: 10px;

  &+& {
    margin-bottom: 20px;
  }

  &::before {
    content: attr(data-text);
    white-space: nowrap;
    color: #666;
  }
}
</style>  