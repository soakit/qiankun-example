import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/sub-react">react应用</Link>
        <Link to="/sub-vue2">vue2应用</Link>
      </BrowserRouter>

      {/* 切换导航， 将微应用渲染container容器中 */}
      <div id="container"></div>
    </div>
  );
}

export default App;
