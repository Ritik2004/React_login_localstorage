import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Component/Home";
import Register from "./Component/Register";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />

          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
