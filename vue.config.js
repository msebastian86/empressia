module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/misc/_variables.scss"; @import "@/assets/styles/misc/_mixins.scss"; @import "@/assets/styles/misc/_grid.scss"; @import "@/assets/styles/misc/_helpers.scss"; @import "@/assets/styles/misc/_font.scss";`,
      },
    },
  },
};
