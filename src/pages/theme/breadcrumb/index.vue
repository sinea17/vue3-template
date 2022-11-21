<template>
  <el-card>
    <Breadcrumb />
    <ul>
      <li>
        <router-link to="/theme/breadcrumb/page1">page1</router-link>
      </li>
      <li>
        <router-link to="/theme/breadcrumb/page2">page2</router-link>
      </li>
      <li>
        <router-link to="/theme/breadcrumb/page3">page3</router-link>
      </li>
    </ul>
    <el-alert title="嵌套路由目录" type="warning" :closable="false">
      <p>页面路由使用vite-plugin-pages自动生成，页面目录参考：</p>
      <div>src/pages/</div>
      <div>├── users/</div>
      <div>│ ├── [id].vue</div>
      <div>│ └── index.vue</div>
      <div>└── users.vue</div>
      <p>vite.config中配置exclude: ['**/components/**']，请勿把页面建立在components目录下！</p>
    </el-alert>
  </el-card>
</template>
  
<script lang='ts' setup>

</script>

<!-- <route lang="yaml">
meta:
  layout: admin
  title: 面包屑
</route> -->