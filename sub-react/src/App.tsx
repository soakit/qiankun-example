import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter
      basename={window.__POWERED_BY_QIANKUN__ ? "/sub-react" : "/"}
    >
      <Link to={"/"}>首页</Link>
      <Link to={"/about"}>关于</Link>
      <Routes>
        <Route path="/" element={<div>home page</div>} />
        <Route path="/about" element={<div>about page</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
