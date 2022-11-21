
import { createRouter, createWebHashHistory } from 'vue-router';
import generatedRoutes from 'virtual:generated-pages';
import { setupLayouts } from "virtual:generated-layouts"// 自动读取 layouts文件夹下的文件
import { GlobalStore } from "@/store/modules/global";
import { AxiosCanceler } from "@/api/axiosCancel";
import NProgress from "@/utils/nprogress";

const router = createRouter({
  history: createWebHashHistory(),
  routes: setupLayouts(generatedRoutes),
  // routes: generatedRoutes,
});
const axiosCanceler = new AxiosCanceler();

router.beforeEach((to, from, next) => {
  NProgress.start();
  axiosCanceler.removeAllPending();
  if (to.name) {
    if (to.path == '/login') {
      next();
      return;
    }
    const globalStore = GlobalStore();
    if (globalStore.token || to.meta.nologin) {
      next();
    } else {
      next({ path: '/login' });
      return;
    }
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done();
});

export default router