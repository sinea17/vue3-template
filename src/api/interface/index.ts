// * 分页请求参数
export interface ReqPage {
  pageNo: number;
  pageSize: number;
  total?: number;
}
/**
 * 请求响应参数(不包含data)
 */
export interface Result {
  code: string;
  msg: string;
  currentTime: string;
}
/**
 * 请求响应参数(包含data)
 */
export interface ResultData<T = any> extends Result {
  data?: T;
}
/**
 * 请求响应列表参数
 */
export interface ListData<T = any> {
  pageNo: number;
  pageSize: number;
  pages: number;
  total: number;
  data: T
}

export interface AnyData {
  [key: string]: any;
}

