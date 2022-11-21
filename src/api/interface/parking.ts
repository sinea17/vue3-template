import { ReqPage } from "@/api/interface";


export namespace Parking {
  /**
   * 请求端类型：1.企业车主，2业务后台，3管理后台
   */
  export type clientType = 1 | 2 | 3;

  export interface ReqParkingList extends ReqPage {
    type: clientType;
    keyWord?: string;
    enterpriseId?: number;
  }
}