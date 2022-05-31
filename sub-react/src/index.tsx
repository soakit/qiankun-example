import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let root: ReactDOM.Root | null = null;
function render(props: { container?: HTMLElement }) {
  const { container } = props;
  root = ReactDOM.createRoot(
    container
      ? (container.querySelector("#root") as HTMLElement)
      : (document.querySelector("#root") as HTMLElement)
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// 使用 webpack 运行时 publicPath 配置
if (window.__POWERED_BY_QIANKUN__) {
  // @ts-ignore
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

// 独立运行微应用
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log("[react18] react app bootstraped");
}

export async function mount(props: { container?: HTMLElement }) {
  console.log("[react18] props from main framework", props);
  render(props);
}

export async function unmount() {
  root?.unmount();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
