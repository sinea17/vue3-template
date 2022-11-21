
/**
 * @description 判断数据类型
 * @param {Any} val 需要判断类型的数据
 * @return string
 */
export function isType(val: any) {
  if (val === null) return "null";
  if (typeof val !== "object") return typeof val;
  else return Object.prototype.toString.call(val).slice(8, -1).toLocaleLowerCase();
}

/**
 * @description 根据枚举列表查询当需要的数据（如果指定了 label 和 value 的 key值，会自动识别格式化）
 * @param {String} callValue 当前单元格值
 * @param {Array} enumData 枚举列表
 * @param {String} type 过滤类型（目前只有 tag）
 * @return string
 * */
export function filterEnum(callValue: any, enumData: any, searchProps?: { [key: string]: any }, type?: string): string {
  const value = searchProps?.value ?? "value";
  const label = searchProps?.label ?? "label";
  let filterData: any = {};
  if (Array.isArray(enumData)) filterData = enumData.find((item: any) => item[value] === callValue);
  if (type == "tag") return filterData?.tagType ? filterData.tagType : "";
  return filterData ? filterData[label] : "--";
}

/**
 * @description 查找指定twoTag数据
 * @param {Any} val 需要判断类型的数据
 * @return 图片url string
 */
export function mediaFileFind(val: any, code: number) {
  let mediaFile: any = {};
  if (Array.isArray(val)) mediaFile = val.find(item => item.twoTag === code)
  return mediaFile ? mediaFile.mediaPath : ''
}

/**
 * @description 解析静态图片URL /assets/images目录下
 * @param name 图片名称
 * @return url string
 */
export function getImageUrl(name: string) {
  return new URL(`../assets/images/${name}.png`, import.meta.url).href;
}