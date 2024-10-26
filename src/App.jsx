import { Route, Routes } from "react-router-dom";
import QRCodeGenerator from "./pages/tools/QRCodeGenerator";
import { PATHS } from "./constants/paths";
import Base64ToFiles from "./pages/tools/Base64ToFiles";
import FilesToBase64 from "./pages/tools/FilesToBase64";
import Home from "./pages/home";
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Navigation/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route
          element={<QRCodeGenerator />}
          path={PATHS.TOOLS.QRCode_GENERATOR}
        />
        <Route element={<Base64ToFiles />} path={PATHS.TOOLS.Base64ToFiles} />
        <Route element={<FilesToBase64 />} path={PATHS.TOOLS.FilesToBase64} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
