//console.log(process.VUE_CLI_SERVICE.mode);
const path = require("path");

module.exports = {
  filenameHashing: false,
  productionSourceMap: false,
  publicPath: "/",
  configureWebpack: {
    devtool: 'source-map'
  },
  css: {
    loaderOptions: {
      // передача настроек в sass-loader
      // @/ это псевдоним к каталогу src/ поэтому предполагается,
      // что у вас в проекте есть файл `src/variables.scss`
      // Примечание: эта опция называется "prependData" в sass-loader v8
      sass: {
        additionalData: `@import "~@/assets/sass/app.sass"`,
      },
      // по умолчанию опция `sass` будет применяться к обоим синтаксисам
      // потому что синтаксис `scss` по сути также обрабатывается sass-loader
      // но при настройке опции `prependData` синтаксис `scss` требует точку с запятой
      // в конце оператора, в то время как для `sass` точки с запятой не требуется
      // в этом случае синтаксис `scss` можно настроить отдельно с помощью опции `scss`
      scss: {
        additionalData: `@import "~@/assets/sass/app.scss";`,
      },
    }
  },
};

