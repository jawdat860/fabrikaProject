import { AppRoot } from "@telegram-apps/telegram-ui";
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import ButtonsTypography from "./components/Module/buttons/ButtonsTypography";
import Garderobnye from "./components/Pages/Garderobnye";
import Kontakty from "./components/Pages/Kontakty";
import MainPage from "./components/Pages/MainPage";
import Prikhozhie from "./components/Pages/Prikhozhie";
import Shkaf from "./components/Pages/Shkaf";
import Typography from "./components/Pages/Typography";

import EmeraldKitchen from "./components/Pages/KichenPages/EmeraldKitchen";
import KitchenArizona from "./components/Pages/KichenPages/KitchenArizona";
import KitchenTop from "./components/Pages/KichenPages/KitchenTop";
import SmartKitchen from "./components/Pages/KichenPages/SmartKitchen";
import VivaKitchen from "./components/Pages/KichenPages/VivaKitchen";
import RabochieZony from "./components/Pages/RabochieZony";
import { apiUrl } from "./config";
import FooterW from "./components/Footer/FooterW";

// Mapping template names to components
const templates = {
  EmeraldKitchen,
  KitchenArizona,
  KitchenTop,
  VivaKitchen,
  SmartKitchen,
};

function App() {
  const [kitchenRoutes, setKitchenRoutes] = useState([]);

  useEffect(() => {
    async function fetchKitchens() {
      try {
        const response = await fetch(`${apiUrl}/api/kitchen/list`);
        const data = await response.json();
        if (data.success) {
          setKitchenRoutes(data.data);
        }
      } catch (error) {
        console.error("Error fetching kitchen data:", error);
      }
    }

    fetchKitchens();
  }, []);

  return (
    <AppRoot>
      <Router>
        <Header />
        <ButtonsTypography />

        <Routes>
          {/* Main route */}
          <Route path="/" element={<MainPage />} />

          {/* Dynamic kitchen routes */}
          {kitchenRoutes.map((route) => {
            const Component = templates[route.template];
            return (
              <Route
                key={route.slug}
                path={`/kitchen/${route.slug}`}
                element={
                  Component ? <Component /> : <div>Template Not Found</div>
                }
              />
            );
          })}

          {/* Static routes */}
          <Route path="/kitchen/SmartKitchen" element={<SmartKitchen />} />
          <Route path="/kitchen/KitchenTop" element={<KitchenTop />} />
          <Route path="/kitchen/VivaKitchen" element={<VivaKitchen />} />
          <Route path="/shkaf" element={<Shkaf />} />
          <Route path="/prikhozhie" element={<Prikhozhie />} />
          <Route path="/garderobnye" element={<Garderobnye />} />
          <Route path="/kontakty" element={<Kontakty />} />
          <Route path="/rabochie-zony" element={<RabochieZony />} />
          <Route path="/Typography" element={<Typography />} />
        </Routes>

        <FooterW />
      </Router>
    </AppRoot>
  );
}

export default App;
