import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "react app", // app name registered
    entry: "//localhost:7100",
    container: "#container",
    activeRule: "/sub-react",
  },
  {
    name: "vue2 app",
    entry: "//localhost:7200",
    container: "#container",
    activeRule: "/sub-vue2",
  },
]);

start();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
