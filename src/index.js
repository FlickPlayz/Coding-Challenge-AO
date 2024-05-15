import './App.css';
import './Layout.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Week1 from "./pages/Week1";
import Week2 from "./pages/Week2";
import Week3 from '.pages//Week3';
import Week4 from '.pages/Week4';
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Week1" element={<Week1 />} />
          <Route path="Week2" element={<Week2 />} />
          <Route path="/Week3" element={<Week3 />} />
          <Route path="/Week4" element={<Week4 />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);