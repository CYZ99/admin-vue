import {
  defineConfig,
  presetAttributify,
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
  rules: [
    ['br-2', { 'border-radius': '10px' }],
    ['br-100', { 'border-radius': '100px' }],
    ['bg-tsp', { 'background-color': '#f4f5f7' }],
    ['active', { color: 'rgba(14, 165, 233)', 'background-color': '#fff' }]
  ],
  theme: {
    colors: {
      veryCool: '#fff', // class="text-very-cool"
      brand: {
        primary: 'rgba(14, 165, 233)' //class="bg-brand-primary"
      },
      primary: 'rgba(14, 165, 233)'
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({
      fonts: {}
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
