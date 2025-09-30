import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import ButtonPage from "./pages/ButtonPage";
import InputPage from "./pages/InputPage";
import ContainerPage from "./pages/ContainerPage";
import SelectPage from "./pages/SelectPage";
import CheckboxPage from "./pages/CheckboxPage";
import ListPage from "./pages/ListPage";

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
          <Route path="/selects" element={<SelectPage />} />
          <Route path="/checkboxes" element={<CheckboxPage />} />
          <Route path="/lists" element={<ListPage />} />
        </Routes>
      </div>
    </Router>
  );
}
