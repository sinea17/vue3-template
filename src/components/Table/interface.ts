/**
 * 搜索项
 */
export interface SearchParam {
  label: string;  //字段描述
  key: string;  //字段名
  el: 'input' | 'select' | 'date-picker'; //组件类型
  selectOptions?: any[];  //选项集合（选择器使用）
  defaultValue?: string | number | boolean | any[]; //默认值
  isHidden?: boolean; //是否隐藏
  slot?: () => any; //自定义插槽
  slotName?: string;
}
/**
 * 搜索项数组
 */
export interface ParamList extends SearchParam {
  component: any; //element组件
}