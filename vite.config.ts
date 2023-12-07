/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import path from 'path'
import VueRouter from 'unplugin-vue-router/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ }) => {
  return {
    base: './',
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    plugins: [
      // https://github.com/posva/unplugin-vue-router
      VueRouter({
        dts: 'types/typed-router.d.ts',
        exclude: ['**/components', '**/*.ts'],
      }),

      // ⚠️ Vue must be placed after VueRouter()
      Vue(),

      // https://github.com/antfu/unplugin-icons
      Icons({}),

      // https://github.com/antfu/vite-plugin-components
      Components({
        dts: 'types/components.d.ts',
        resolvers: [IconsResolver()],
        types: [],
      }),

      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        dts: 'types/auto-imports.d.ts',
        imports: ['vue', 'vue-router', '@vueuse/core'],
      }),

      // https://github.com/unocss/unocss
      Unocss(),
    ],
    test: {
      globals: true,
    },
  }
})
