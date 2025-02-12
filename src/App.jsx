import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RandomGenerator from "./Components/RandomGen/RandomGenerator";
import Base64Encoder from "./Components/Base64/Base64Encoder";
import Base64Decoder from "./Components/Base64/Base64Decoder";
import Home from "./Components/Home/Home";
import DarkModeToggle from "./Components/toolBar/DarkModeToggle";
import "./App.css"

function App() {
  const [isDarkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDarkTheme);
  }, [isDarkTheme]);
  return (
    <BrowserRouter basename="/utilities">
      <div className="DarkModetoggle">
      <DarkModeToggle isDarkTheme={isDarkTheme} setDarkTheme={setDarkTheme}/>
      </div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/RandomGen" element={<RandomGenerator />} />
        <Route path="/encode" element={<Base64Encoder />} />
        <Route path="/decode" element={<Base64Decoder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
