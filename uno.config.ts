import {
  defineConfig,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
  presetAttributify,
  presetIcons,
} from 'unocss'

export default defineConfig({
  presets: [presetWind4(), presetAttributify(), presetIcons()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
