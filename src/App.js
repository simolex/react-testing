import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  }, []);
  return (
    <div className="App">
      {data && <div style={{ color: "red" }}>data</div>}
      <h1>Hello world!</h1>
      <button>Click me</button>
      <input type="text" placeholder="input value ..." />
    </div>
  );
}

export default App;
