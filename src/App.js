// import logo from "./logo.svg";
// import "./App.css";
// import { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState(null);
//   const [toggle, setToggle] = useState(false);
//   const [value, setValue] = useState("");

//   const onClick = () => setToggle((prev) => !prev);

//   useEffect(() => {
//     setTimeout(() => {
//       setData({});
//     }, 100);
//   }, []);
//   return (
//     <div className="App">
//       <h1 data-testid="value-elem">{value}</h1>
//       {toggle === true && <div data-testid="toggle-elem">toggle</div>}
//       {data && <div style={{ color: "red" }}>data</div>}
//       <h1>Hello world!</h1>
//       <button data-testid="toggle-btn" onClick={onClick}>
//         Click me
//       </button>
//       <input onChange={(e) => setValue(e.target.value)} type="text" placeholder="input value ..." />
//     </div>
//   );
// }

// export default App;

import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
