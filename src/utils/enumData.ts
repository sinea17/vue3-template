// * 系统枚举字典

/**
 * @description：业务类型
 */
export const businessTypeEnum = [
	{ label: "按天包车", value: 1 },
	{ label: "网约快车", value: 2 },
	{ label: "共享汽车", value: 3 },
	{ label: "分时包车", value: 4 },
	{ label: "跨城拼车", value: 5 },
	{ label: "分时租赁", value: 6 }
];

/**
 * @description：业务类型
 */
export const timeshareOrderStateEnum = [
	{ label: "已取消", value: 0 },
	{ label: "待取车", value: 4 },
	{ label: "进行中", value: 6 },
	{ label: "等待确认账单", value: 8 },
	{ label: "已完成", value: 9 }
];