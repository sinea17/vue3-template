import { ListData } from "@/api/interface";
import RequestHttp from "@/api";

class OrderService {
  private http;
  constructor() {
    this.http = new RequestHttp({
      baseURL: import.meta.env.VITE_API_URL as string
    })
  }

  /**
   * 获取所有订单
   */
  getAllDriverOrder = (params: any) => {
    return this.http.postForm<ListData>('/enterprise/order/v1/get_all_driver_order', params);
  }

  /**
   * 获取订单详情
   * @param orderId
   * @returns 返回分时租赁订单信息
   */
  getTimeShareOrderDetail = (orderId: number) => {
    return this.http.postFormCarryPathVariable('/timeSharing/driver/order/v1/get_order_detail/{orderId}', {}, { orderId });
  }
  /**
   * 分时租赁校验单查询
   * @param orderId
   */
  getTimeShareVehicleCheck = (orderId: number) => {
    return this.http.get('/timeSharing/driver/order/get_time_sharing_CheckList', { orderId });
  }
  /**
   * 根据车辆id获取分时租赁车辆故障信息
   */
  getVehicleFaultList = (params: any) => {
    return this.http.get<ListData>('/timeSharing/order/v1/get_fault_report_list', params);
  }
  /**
   * 租车校验单查询
   * @param orderId
   * @returns 返回分时租赁车辆损伤
   */
  getTimeShareVehicleScars = (orderId: number) => {
    return this.http.get<ListData>('/timeSharing/order/getRentCheckList', { orderId });
  }
  /**
   * 导出订单
   */
  exportOrderList = (params: any) => {
    return this.http.post('/enterprise/order/v1/export_order', params);
  }

}

export default new OrderService()

