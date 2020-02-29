module.exports = {
  plugins: {
    tailwindcss: {},
    'vue-cli-plugin-tailwind/purgecss': {
      content: [
        './src/**/*.vue',
        './src/**/*.js',
        './src/**/*.jsx',
        './src/**/*.html',
        './src/**/*.pug',
        './src/**/*.md',
        './node_modules/vue-slick-carousel/**/*.js'
      ],
      whitelist: [
        'body',
        'html',
        'img',
        'a'
      ],
      whitelistPatternsChildren: [/slick/, /animate/, /ripple/],
    }
  }
}
