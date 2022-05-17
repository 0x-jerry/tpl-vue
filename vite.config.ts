import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import path from 'path'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, transformerDirectives } from 'unocss'
import { VueKitResolver } from '@0x-jerry/vue-kit/resolver'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: './',
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue(),

    // https://github.com/antfu/unplugin-icons
    Icons(),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: 'src/auto-components.d.ts',
      resolvers: [VueKitResolver(), IconsResolver()],
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      exclude: ['**/components/*.vue', '**/*.ts'],
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      dts: 'src/auto-imports.d.ts',
      imports: ['vue', 'vue-router', '@vueuse/core'],
    }),

    // https://github.com/unocss/unocss
    Unocss({
      presets: [presetAttributify(), presetUno()],
      transformers: [transformerDirectives()],
    }),
  ],
}))
