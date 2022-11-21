import { GlobalState } from "../interface";

export const GlobalStore = defineStore({
  id: "GlobalState",
  state: (): GlobalState => ({
    token: "",
    userInfo: "",
    isSaveAccount: false,
    accountInfo: '',//登录账号密码
    SMSLastTime: 0//最后发送短信时间
  }),
  getters: {},
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    removeToken() {
      this.token = ''
    },
    setUserInfo(userInfo: any) {
      this.userInfo = userInfo;
    },
    removeUserInfo() {
      this.userInfo = ''
    },
    switchIsSaveAccount() {
      this.isSaveAccount = !this.isSaveAccount;
    },
    setAccountInfo(accountInfo: any) {
      this.accountInfo = accountInfo
    },
    removeAccountInfo() {
      this.accountInfo = ''
    },
    setSMSLastTime(time: number) {
      this.SMSLastTime = time
    }
  },
  persist: true
});