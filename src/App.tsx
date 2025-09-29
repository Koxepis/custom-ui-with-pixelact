import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import ButtonPage from "./pages/ButtonPage";
import InputPage from "./pages/InputPage";
import ContainerPage from "./pages/ContainerPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buttons" element={<ButtonPage />} />
          <Route path="/inputs" element={<InputPage />} />
          <Route path="/containers" element={<ContainerPage />} />
        </Routes>
      </div>
    </Router>
  );
}
