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
    ['active', { color: 'rgba(14, 165, 233)', 'background-color': '#fff' }],
    [
      'linear-grdient-text',
      {
        background: 'linear-gradient(to right, rgba(247, 149, 93, 0.893), #9ec1fd)',
        '-webkit-background-clip': 'text',
        'background-clip': 'text',
        color: 'transparent'
      }
    ],
    ['font-size10', {'font-szie': '20px'}]
  ],
  theme: {
    colors: {
      veryCool: 'linear-grdient-text', // class="text-very-cool"
      brand: {
        primary: 'rgba(14, 165, 233)' //class="bg-brand-primary"
      },
      default: {
        bgHeader: '#fff',
        bgAside: '#051328'
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
