import { Routes, Route } from "react-router-dom";
import Dash from "./pages/Dash";
import Home from "./pages/Home";
import Terms from "./pages/Terms";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dash />} />
      <Route path="/home" element={<Home />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
}

export default App;
