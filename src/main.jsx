import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import AppAltFonts from "./AppAltFonts";
import RollupMontrealPage from "./RollupMontrealPage";
import PolitiqueConfidentialite from "./PolitiqueConfidentialite";
import ConditionsUtilisation from "./ConditionsUtilisation";
import NotFound from "./NotFound";
import "./index.css";

// false = version actuelle (Rajdhani + IBM Plex Sans)
// true = version alternative (Bebas Neue + IBM Plex Sans)
const USE_ALT_FONTS_VERSION = false;
const HomePage = USE_ALT_FONTS_VERSION ? AppAltFonts : App;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/roll-up-montreal" element={<RollupMontrealPage />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="/conditions-utilisation" element={<ConditionsUtilisation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
