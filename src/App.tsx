import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import KasaysayanPage from "./pages/KasaysayanPage";
import SimbahanPage from "./pages/SimbahanPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/kasaysayan" element={<KasaysayanPage />} />
      <Route path="/simbahan" element={<SimbahanPage />} />
      {/* <Route path="/timeline" element={<TimelinePage />} /> */}
    </Routes>
  );
}
