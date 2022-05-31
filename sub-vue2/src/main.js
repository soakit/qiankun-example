import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

let instance = null;
function render(props) {
  const { container } = props;
  instance = new Vue({
    render: (h) => h(App),
  }).$mount(
    container ? container.querySelector("#app") : document.querySelector("#app")
  ); // 这里是挂载到自己的html中  基座会拿到这个挂载后的html 将其插入进去
}

// 动态添加publicPath
if (window.__POWERED_BY_QIANKUN__) {
  window.__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

// 默认独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

// 需要暴露接入协议
export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}

export async function mount(props) {
  console.log("[vue] props from main framework", props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
}
