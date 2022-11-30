<template>
  <el-form :inline="true">
    <!-- <el-form-item>
      <el-input v-model="inputValue1" placeholder="搜索内容" clearable>
        <template #prefix>
          <SvgIcon name="search" size="16px" />
        </template>
      </el-input>

    </el-form-item> -->
    <el-form-item v-for="(item, index) in paramList" :key="index">
      <component :is="item.component" v-model="formParam[item.key]" :placeholder="item.label"
        :clearable="clearable(item)">
        <template v-if="item.el === 'select'">
          <el-option v-for="option in item.selectOptions" :key="option.value" :label="option.label"
            :value="option.value"></el-option>
        </template>
        <template #[item.slotName] v-if="item.slot">
          <component :is="item.slot"></component>
        </template>
      </component>
    </el-form-item>
    <el-form-item btn>
      <el-button type="primary" @click="search">查询</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang='ts' setup>
import { ParamList } from "@/components/Table/interface";

interface TableFormProps {
  paramList?: ParamList[];
  formParam?: { [key: string]: any }; //搜索参数
  search: (params: any) => void;      //搜索方法
  reset: (params: any) => void;       //重置方法
}

const props = withDefaults(defineProps<TableFormProps>(), {
  paramList: () => [],
  formParam: () => ({})
});

// 是否有清除按钮 (当搜索项有默认值时，清除按钮不显示)
const clearable = (param: ParamList) => {
  return param.el == 'input' || param.defaultValue == null || param.defaultValue == undefined;
};


const val = ref('')
</script>
  