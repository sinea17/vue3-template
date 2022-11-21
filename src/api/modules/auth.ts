import { Login } from "@/api/interface/auth";
import RequestHttp from "@/api";

class AuthService {
  private http;
  constructor() {
    this.http = new RequestHttp({
      baseURL: import.meta.env.VITE_API_URL as string
    })
  }

  /**
   * 管理后台登录
   * @param phone 
   * @param passWord 
   * @description 登录管理账号返回用户信息
   */
  login = (params: Login.ReqLoginForm) => {
    return this.http.postForm<Login.ResLogin>('/auth/v1/enterprise/web/login', params);
  }
  /**
   * 生成图片验证码
   * @returns base64图片
   */
  getCodeImg = () => {
    return this.http.get<Login.ResCodeImg>('/sms/v1/make');
  }
  /**
   * 发送短信验证码
   */
  getCodeSMS = (params: any) => {
    return this.http.postFormCarryPathVariable('/sms/v1/code/{phone}', params, { phone: params.phone });
  }
  /**
   * 获取企业司机信息
   */
  getEnterpriseDriverInfo = (params: any) => {
    return this.http.get('/driver/base/enterprise/v1/get_enterprise_driver_info', params);
  }
  /**
   * 根据key查询配置
   */
  getConfig = (paramKey: string) => {
    return this.http.getCarryPathVariable('/config/v1/get_config/{paramKey}', {}, { paramKey });
  }

}

export default new AuthService()

