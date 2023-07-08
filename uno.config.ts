import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'


export default defineConfig({
  shortcuts: [
    // ...
  ],
  rules: [['m-2', { margin: '10px' }]],
  theme: {
    colors: {
      veryCool: '#fff', // class="text-very-cool"
      brand: {
        primary: 'hsla(var(--hue, 217), 78%, 51%)' //class="bg-brand-primary"
      }
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
