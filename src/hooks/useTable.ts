import { SearchParam, PageParam } from "@/components/Table/interface";

/**
 * 参考 https://juejin.cn/post/7166068828202336263
 * @description table组件方法封装
 * @param api 请求接口（必传）
 * @param dataFormatter 后台返回数据处理（非必传）
 */

const useTable = (
  api: (params: any) => Promise<any>,
  searchParam: SearchParam[],
  dataFormatter?: (data: any, currentTime: string) => any
) => {

  interface TableState {
    tableData: any[];
    formParam: { [key: string]: any };
    pageParam: PageParam,
    loading: boolean
  }
  const state = reactive<TableState>({
    tableData: [],  //表格数据
    formParam: {},  //查询参数
    pageParam: {
      pageNo: 1,
      pageSize: 10,
      total: 0
    },
    loading: false
  });

  onMounted(() => {
    reset();
  });

  const getTableData = async () => {
    try {
      state.loading = true
      let { data, currentTime } = await api({
        ...state.formParam,
        ...state.pageParam
      })
      // console.log('返回数据', data)
      if (dataFormatter) {
        let _data = await dataFormatter(data.data, currentTime);
        data.data = _data
      }
      state.tableData = data.data
      state.pageParam.total = data.total
    } catch (err) {
      state.tableData = []
      state.pageParam.total = 0
    } finally {
      state.loading = false
    }
  }

  /**
   * @description 重置搜索参数
   * */
  const reset = () => {
    console.log('数据重置')
    state.formParam = {};
    searchParam.forEach(item => {
      if (item.defaultValue !== undefined) state.formParam[item.key] = item.defaultValue
    })
    getTableData();
  };
  /**
   * @description 查询数据
   * */
  const search = () => {
    // console.log('查询数据', state.formParam)
    getTableData()
  };
  /**
   * @description 当前页改变
   */
  const handleCurrentChange = (val: number) => {
    state.pageParam.pageNo = val;
    getTableData();
  }
  /**
   * @description 每页条数改变
   */
  const handleSizeChange = (val: number) => {
    state.pageParam.pageNo = 1;
    state.pageParam.pageSize = val;
    getTableData()
  }

  return {
    ...toRefs(state),
    search,
    reset,
    getTableData,
    handleSizeChange,
    handleCurrentChange
  };
}
export default useTable