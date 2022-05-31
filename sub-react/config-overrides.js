module.exports = {
  webpack: (config) => {
    config.output.library = "reactApp";
    config.output.libraryTarget = "umd";
    config.output.publicPath = "http://localhost:7100/";
    return config;
  },
  devServer: (configFn) => {
    return function (proxy, allowedHost) {
      const config = configFn(proxy, allowedHost);
      config.headers = {
        "Access-Control-Allow-Origin": "*",
      };
      return config;
    };
  },
};
