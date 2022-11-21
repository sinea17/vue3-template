import { filterEnum, isType } from "@/utils/util";
import { businessTypeEnum } from "@/utils/enumData";

/**
 * @description 默认值（null、undefined）
 * @return string
 * */
export function defaultFilter(callValue: any) {
  // 如果当前值为数组,使用 / 拼接（根据需求自定义）
  if (callValue && Array.isArray(callValue)) return callValue.length ? callValue.join(" / ") : "--";
  return callValue ?? "--";
}
/**
 * @description 默认值（null、undefined、''、0）
 * @return string
 * */
export function defaultFilterSub(callValue: any) {
  // 如果当前值为数组,使用 / 拼接（根据需求自定义）
  if (callValue && Array.isArray(callValue)) return callValue.length ? callValue.join(" / ") : "--";
  return callValue || "--";
}

/**
 * @description 单元格默认值
 * @param {Number} row 行
 * @param {Number} col 列
 * @param {String} callValue 当前单元格值
 * @return string
 * */
export function defaultFormat(row: number, col: number, callValue: any) {
  return defaultFilter(callValue)
}

/**
 * @description 业务类型
 * @return string
 * */
export function businessFilter(callValue: any) {
  return filterEnum(callValue, businessTypeEnum)
}

/**
 * @description 单元格业务类型
 * @param {Number} row 行
 * @param {Number} col 列
 * @param {String} callValue 当前单元格值
 * @return string
 * */
export function businessFormatter(row: number, col: number, callValue: any) {
  return businessFilter(callValue)
}

/**
 * @description 价格金额
 * @return string
 * */
export function moneyFilter(callValue: any) {
  return isType(callValue) == 'number' ? '￥' + callValue.toFixed(2) : '--'
}

/**
 * @description 单元格价格金额
 * @param {Number} row 行
 * @param {Number} col 列
 * @param {String} callValue 当前单元格值
 * @return string
 * */
export function moneyFormatter(row: number, col: number, callValue: any) {
  return moneyFilter(callValue)
}

/**
 * @description 默认时间格式过滤
 * @return string YYYY-MM-DD HH:mm
 * */
export function datetimeFilter(callValue: any) {
  return callValue ? callValue.slice(0, 16) : '--'
}

/**
 * @description 单元格默认时间格式过滤
 * @param {Number} row 行
 * @param {Number} col 列
 * @param {String} callValue 当前单元格值
 * @return string
 * */
export function datetimeFormatter(row: number, col: number, callValue: any) {
  return datetimeFilter(callValue)
}