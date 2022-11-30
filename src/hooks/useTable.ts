import { SearchParam } from "@/components/Table/interface";

/**
 * 参考 https://juejin.cn/post/7166068828202336263
 * @description table组件方法封装
 * @param api 请求接口（必传）
 * @param dataCallBack 后台返回数据处理（非必传）
 */

const useTable = (
  api: (params: any) => Promise<any>,
  searchParam: SearchParam[],
  dataCallBack?: (data: any) => any
) => {

  interface TableState {
    tableData: any[];
    formParam: { [key: string]: any };
  }
  const state = reactive<TableState>({
    tableData: [],  //表格数据
    formParam: {},  //查询参数
  });

  onMounted(() => {
    reset();
  });

  /**
   * @description 重置搜索参数
   * */
  const reset = () => {
    console.log('数据重置')
    searchParam.forEach(item => {
      if (item.defaultValue !== undefined) state.formParam[item.key] = item.defaultValue
    })
  };
  /**
   * @description 查询数据
   * */
  const search = () => {
    console.log('查询数据')
  };

  return {
    ...toRefs(state),
    search,
    reset,
  };
}
export default useTable