const { defineConfig } = require("@vue/cli-service");
const name = "sub-vue2";

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 7200,
    headers: {
      // 解决跨域
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: "umd",
    },
  },
});
