<template>
  <el-form :inline="true">
    <el-form-item v-for="(item, index) in searchParam" :key="index" v-show="item.el">
      <component v-if="item.el" :is="component(item)" v-model="formParam[item.key]" :clearable="clearable(item)"
        start-placeholder="开始时间" end-placeholder="结束时间" v-bind="item" :placeholder="placeholder(item)"
        v-on="{ ...item.events }">
        <template v-if="item.el === 'select'">
          <el-option v-for="option in item.selectOptions" :key="option.value" :label="option.label"
            :value="option.value"></el-option>
        </template>
        <template v-for="slot in item.slots" :key="slot.name" #[slot.name]>
          <component :is="slot.render"></component>
        </template>
      </component>
    </el-form-item>
    <el-form-item btn>
      <el-button type="primary" @click="search" :loading="loading">查询</el-button>
      <el-button @click="reset">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang='ts' setup>
import { SearchItem } from "../interface";
import { filterEnum } from "@/utils/util";
import { elementPlusEnum } from "@/utils/enumData";

interface TableFormProps {
  searchParam?: SearchItem[];
  formParam?: { [key: string]: any }; //搜索参数
  search: (params: any) => void;      //搜索方法
  reset: (params: any) => void;       //重置方法
  loading: boolean;
}

const props = withDefaults(defineProps<TableFormProps>(), {
  searchParam: () => ([]),
  formParam: () => ({})
});

// 是否显示清除按钮 (当搜索项是输入框或者没有默认值时，清除按钮显示)
const clearable = (param: SearchItem) => {
  return param.el == 'input' || param.defaultValue == null || param.defaultValue == undefined;
};
// 判断 placeholder
const placeholder = (param: SearchItem) => {
  return param.placeholder ?? (param.el === "input" ? "请输入" : "请选择");
};
// 获取对应的组件对象
const component = (param: SearchItem) => {
  return filterEnum(param.el, elementPlusEnum, { label: 'value', value: 'label' })
}
</script>
  