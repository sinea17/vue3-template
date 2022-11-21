import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { AxiosCanceler } from "./axiosCancel";
import { ResultData } from "@/api/interface";
import { GlobalStore } from "@/store/modules/global";
import { ElMessage } from "element-plus";
import router from '@/router';
import { isType } from '@/utils/util';

const axiosCanceler = new AxiosCanceler();

// const config = {
//   baseURL: import.meta.env.VITE_API_URL as string,
//   timeout: 10000
// };

const toLogin = () => {
  router.push('/login')
}

class RequestHttp {
  service: AxiosInstance;
  public constructor(config?: AxiosRequestConfig) {
    this.service = axios.create(config);
    // 请求拦截器
    this.service.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        axiosCanceler.addPending(config);
        const globalStore = GlobalStore();
        return {
          timeout: 10000,//10秒超时
          ...config,
          headers: {
            ...config.headers,
            "authorization": globalStore.token
          }
        };
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    // 响应拦截器
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data, config, status } = response;
        if (status == 200 && isType(data) == 'blob') {
          return data;
        }
        const globalStore = GlobalStore();
        axiosCanceler.removePending(config);
        if (data.code == 401) {
          // token无效
          ElMessage.error(data.msg);
          globalStore.setToken("");
          toLogin()
          return Promise.reject(data);
        }
        if (data.code !== 200) {
          ElMessage.error(data.msg || `未知错误（code:${data.code}）`);
          return Promise.reject(data);
        }
        return data;
      },
      (error: AxiosError) => {
        const { response } = error;
        if (error.message.indexOf("timeout") !== -1) ElMessage.error("请求超时");
        if (response) ElMessage.error("请求失败");
        // 服务器结果都没有返回(可能服务器错误可能客户端断网)，断网处理:可以跳转到断网页面
        if (!window.navigator.onLine) router.replace({ path: "/500" });
        return Promise.reject(error);
      }
    );
  }

  // * 常用请求方法封装
  get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.get(url, { params, ..._object });
  }
  getCarryPathVariable<T>(url: string, params?: any, pathVariables?: any, _object = {}): Promise<ResultData<T>> {
    let newRequestPath = url;
    Object.keys(pathVariables).forEach(function (key) {
      newRequestPath = newRequestPath.replace(
        "{" + key + "}",
        pathVariables[key]
      );
    });

    return this.service.get(newRequestPath, { params, ..._object });
  }
  post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.post(url, params, _object);
  }
  postForm<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
    var urlSearchParams = new URLSearchParams();
    for (var i in params) {
      urlSearchParams.append(i, params[i]);
    }
    _object = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    };
    return this.service.post(url, urlSearchParams, _object);
  }
  postFormCarryPathVariable<T>(url: string, params?: any, pathVariables?: any, _object = {}): Promise<ResultData<T>> {
    let newRequestPath = url;
    Object.keys(pathVariables).forEach(function (key) {
      newRequestPath = newRequestPath.replace(
        "{" + key + "}",
        pathVariables[key]
      );
    });

    var urlSearchParams = new URLSearchParams();
    for (var i in params) {
      urlSearchParams.append(i, params[i]);
    }
    _object = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    };
    return this.service.post(newRequestPath, urlSearchParams, _object);
  }
}

// export default new RequestHttp(config);
export default RequestHttp;
