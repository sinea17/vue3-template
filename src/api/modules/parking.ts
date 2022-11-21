import { Parking } from "@/api/interface/parking";
import { ListData } from "@/api/interface";
import RequestHttp from "@/api";

class ParkingService {
  private http;
  constructor() {
    this.http = new RequestHttp({
      baseURL: import.meta.env.VITE_API_URL as string
    })
  }

  /**
   * 查询企业所有停车点位
   */
  getParkingList = (params: Parking.ReqParkingList) => {
    return this.http.get<ListData>('/timeSharing/car/vehicle/config/v1/get_all_pick_position', params);
  }
  /**
   * 修改或新增车辆取车位置
   */
  updateParking = (params: any) => {
    return this.http.post('/timeSharing/car/vehicle/config/v1/update_time_sharing_car_pick_up_position', params);
  }
  /**
   * 根据位置id查询停车点位置详细信息
   * @param id 停车网点id 
   */
  getParkingInfo = (id: number) => {
    return this.http.get<any>('/timeSharing/car/vehicle/config/v1/get_time_sharing_car_pick_up_position_by_id', { id });
  }
  /**
   * 查询所有分时租赁车辆信息
   * @param type 请求端类型：1.企业车主，2业务后台，3管理后台 
   */
  getTimeshareVehicleList = (type: Parking.clientType) => {
    return this.http.get<[]>('/timeSharing/car/vehicle/config/v1/get_all_time_sharing_car', { type });
  }
  /**
   * 绑定停车地点与车辆的关系
   */
  bindParkingVehicle = (params: any) => {
    return this.http.postForm('/timeSharing/car/vehicle/config/v1/bind_position_vehicle', params);
  }

}

export default new ParkingService()

