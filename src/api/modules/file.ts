import RequestHttp from "@/api";

//文件请求
class FileService {
  private http;
  constructor() {
    this.http = new RequestHttp({
      baseURL: import.meta.env.VITE_USER_NODE_ENV == 'test' ? import.meta.env.VITE_FILE_URL : '/file_api'
      // baseURL: import.meta.env.VITE_FILE_URL as string
      // baseURL: ''
    })
  }
  /**
   * 获取文件流
   * @returns blob
   */
  getFile = (url: string) => {
    return this.http.get(url, {}, { responseType: 'blob' });
  }
}

export default new FileService()

