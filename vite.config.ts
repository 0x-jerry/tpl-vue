import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import VueComponents from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    Vue(),
    VueComponents({
      dts: true,
    }),
    WindiCSS({
      config: {
        attributify: true,
      },
    }),
  ],
})
