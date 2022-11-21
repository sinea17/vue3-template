# Vue 3 + TypeScript + Vite

## PNPM
<!-- 拉取依赖 -->
```
pnpm i
```
<!-- 启动 -->
```
pnpm dev
```
<!-- 安装开发依赖 devDependencies -->
```
pnpm add -D xxx
```
<!-- 移除 -->
```
pnpm remove xxx
```
<!-- 升级 -->
```
pnpm up xxx
```

## 文件路由
- src/pages/index.vue => /
- src/pages/about.vue => /about
- src/pages/users/index.vue => /users
- src/pages/users/profile.vue => /users/profile
- src/pages/users/[id].vue => /users/:id
- src/pages/[user]/settings.vue => /:user/settings
- src/pages/[...NoFound].vue => 404 路由

## 布局系统
默认布局：`src/layouts/default.vue`
非默认布局使用：`src/layouts/custom.vue`
<!-- 页面内添加自定义块 👇 -->
```
<route lang="yaml">
meta:
  layout: custom
</route>
```

## typescript
```
// 空对象
reactive<{ [key: string]: any }>({})
ref({})

// 空数组
ref<{ [key: string]: any }[]>([]);

// 字符串数组
reactive<string[]>(["default", "large", "small"])
```

## 打包预览
```
// 定位到打包目录下执行命令
anywhere
```

## 动态引入静态资源
```
const getImgUrl = (name)=> new URL(`../assets/images/${name}.png`, import.meta.url).href;
```