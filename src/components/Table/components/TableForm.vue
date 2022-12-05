<template>
  <el-form :inline="true">
    <!-- <template v-for="(item, index) in paramList" :key="index">
      <TableFormItem v-if="item.el" :formItem="item"></TableFormItem>
    </template> -->
    <el-form-item v-for="(item, index) in paramList" :key="index" v-show="item.el">
      <component v-if="item.el" :is="item.component" v-model="formParam[item.key]" :clearable="clearable(item)"
        start-placeholder="开始时间" end-placeholder="结束时间" v-bind="item.props" :placeholder="placeholder(item)"
        @change="(val: any) => item.events && item.events.change(val, formParam)">
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
import { ParamList } from "../interface";

interface TableFormProps {
  paramList?: ParamList[];
  formParam?: { [key: string]: any }; //搜索参数
  search: (params: any) => void;      //搜索方法
  reset: (params: any) => void;       //重置方法
  loading: boolean;
}

const props = withDefaults(defineProps<TableFormProps>(), {
  paramList: () => [],
  formParam: () => ({})
});

// 是否显示清除按钮 (当搜索项是输入框或者没有默认值时，清除按钮显示)
const clearable = (param: ParamList) => {
  return param.el == 'input' || param.defaultValue == null || param.defaultValue == undefined;
};
// 判断 placeholder
const placeholder = (param: ParamList) => {
  return param.props?.placeholder ?? (param.el === "input" ? "请输入" : "请选择");
};


const val = ref('')
</script>
  