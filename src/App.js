import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Detail from "./pages/Detail/detail";
import Home from "./pages/Home/home";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="detail/:id" element={<Detail />} />
  </Routes>
  );
}

export default App;
