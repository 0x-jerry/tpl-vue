import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup,
  presetAttributify,
  presetIcons,
  presetMini,
} from 'unocss'

export default defineConfig({
  presets: [presetMini(), presetAttributify(), presetIcons()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
