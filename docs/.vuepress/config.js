module.exports = {
    base: '/daily-note/',
    themeConfig: {
      nav: [
        { text: 'Github', link: 'https://github.com/rainwalkerhu/daily-note' },
      ],
      docsRepo: 'rainwalkerhu/daily-note',
      docsDir: '/',
      lastUpdated: 'Last Updated',
    },
    plugins: ['permalink-pinyin', ['autobar', {'pinyinNav': true}], 'rpurl'],
    chainWebpack: (config, isServer) => {
      const inlineLimit = 10000
      config.module.rule('images')
        .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
        .use('url-loader')
          .loader('url-loader')
          .options({
            limit: inlineLimit,
            name: `assets/img/[name].[hash:8].[ext]`
          })
    }
  }
  