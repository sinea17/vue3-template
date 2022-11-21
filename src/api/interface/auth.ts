export namespace Login {
  export interface ReqLoginForm {
    phone: string;
    passWord?: string;
    authCode?: string;
    codeValue?: string;
  }
  export interface ResLogin {
    token: string;
  }
  export interface ResCodeImg {
    key: string;
    base64Img: string;
  }
}