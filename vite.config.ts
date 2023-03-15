import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import * as path from 'path';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import viteCompression from "vite-plugin-compression";
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueSetupExtend from 'vite-plugin-vue-setup-extend-plus'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    base: './',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/styles/element/element.scss" as *;`,
        },
      },
    },
    plugins: [
      Vue({
        // reactivityTransform: true //启用 响应性语法糖
      }),
      Pages({
        exclude: ['**/components/**'],
        // importMode: 'async',
      }),
      Layouts(),
      AutoImport({
        imports: ['vue', 'pinia', 'vue-router', '@vueuse/core'],
        resolvers: [ElementPlusResolver({ importStyle: 'sass' })]
      }),
      Components({
        resolvers: [
          ElementPlusResolver({ importStyle: 'sass' })
        ],
      }),
      ElementPlus({
        useSource: true
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/svg")],
        symbolId: "icon-[dir]-[name]"
      }),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: "gzip",
        ext: ".gz"
      }),
      vueJsx(),
      VueSetupExtend()
    ],
    server: {
      port: 8080,
      host: '0.0.0.0',
      cors: true,
      proxy: {
        "/file_api": {
          target: env.VITE_FILE_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/file_api/, "")
        }
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('components') && !id.includes('pages')) {
              // 把 components 文件里面的文件都打包到 components.js 中 排除pages中的 components
              return 'components'
            }
          },
          // Static resource classification and packaging
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
        }
      },
      chunkSizeWarningLimit: 1024
    }
  }
})