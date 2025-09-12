import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import KasaysayanPinagmulan from "./pages/KasaysayanPinagmulan";
import WikaPanitikan from "./pages/WikaPanitikan";
import SiningTradisyon from "./pages/SiningTradisyon";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/kasaysayan-pinagmulan" element={<KasaysayanPinagmulan />} />
      <Route path="/wika-panitikan" element={<WikaPanitikan />} />
      <Route path="/sining-tradisyon" element={<SiningTradisyon />} />
      {/* <Route path="/timeline" element={<TimelinePage />} /> */}
    </Routes>
  );
}
