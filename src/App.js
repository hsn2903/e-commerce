import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="about" element={<div>about</div>} />
        <Route path="contact" element={<div>contact</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
