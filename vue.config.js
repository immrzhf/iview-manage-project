module.exports = {
    productionSourceMap: false,
    devServer: {
      host: "0.0.0.0",
      port: 8888,
      proxy: {
        "": {
          // target:
          //   "http://mock.eolinker.com/PpQk8IDe086eb397401a3415a09d55eeea767fefb3b931b?uri=",
          target: "http://127.0.0.1:8081/",
          ws: true,
          changeOrigin: true
        }
      }
    },
    css: {
      loaderOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    }
  };
  