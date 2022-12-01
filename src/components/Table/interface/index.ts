/**
 * 搜索项
 */
export interface SearchParam {
  key: string;  //字段名
  label?: string;  //字段描述
  props?: any; //组件配置
  el?: 'input' | 'select' | 'date-picker'; //组件类型
  selectOptions?: any[];  //选项集合（选择器使用）
  defaultValue?: string | number | boolean | any[]; //默认值
  slot?: () => any; //自定义插槽
  slotName?: string;
  slots?: Slot[];
  // event?: { [key: string]: any }
  event?: any
}
/**
 * 搜索项数组
 */
export interface ParamList extends SearchParam {
  component: any; //element组件
}
/**
 * 插槽项
 */
interface Slot {
  name: string; //插槽名称
  render: () => any; //插槽渲染
}
/**
 * 分页参数
 */
export interface PageParam {
  pageNo: number;
  pageSize: number;
  total: number;
}

/**
 * 表格列参数
 */
export interface ColumnItem {
  prop: string;
  label: string;
  headerRender?: (row: ColumnItem) => any; // 表头插槽渲染
}