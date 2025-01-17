import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";
import { HashRouter as Router, Routes, Route } from "react-router"; // Changed to HashRouter
import { AppRoot } from "@telegram-apps/telegram-ui";

import MainPage from "./components/Pages/MainPage";
import KitchenPage from "./components/Pages/KitchenPage";
import ButtonsTypography from "./components/Module/buttons/ButtonsTypography";
import Typography from "./components/Pages/Typography";
import Shkaf from "./components/Pages/Shkaf";
import Prikhozhie from "./components/Pages/Prikhozhie";
import Garderobnye from "./components/Pages/Garderobnye";
import Kontakty from "./components/Pages/Kontakty";

import RabochieZony from "./components/Pages/RabochieZony";
import EmeraldKitchen from "./components/Pages/KichenPages/EmeraldKitchen";
import KitchenArizona from "./components/Pages/KichenPages/KitchenArizona";
import KitchenTop from "./components/Pages/KichenPages/KitchenTop";
import VivaKitchen from "./components/Pages/KichenPages/VivaKitchen";
import SmartKitchen from "./components/Pages/KichenPages/SmartKitchen";
import { apiUrl } from "./config";
import ScrollToTop from "./components/Module/GoToTop/ScrollToTop";
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
        const response = await fetch(apiUrl + "/api/kitchen/list");
        const data = await response.json();
        if (data.success) {
          setKitchenRoutes(data.data);
        }
      } catch (error) {
        console.error("Ошибка при получении данных кухонь:", error);
      }
    }

    fetchKitchens();
  }, []);
  console.log(kitchenRoutes);
  return (
    <AppRoot>
      <Router>
        <AppRoot>
          <header>
            <Header />
          </header>

          <ScrollToTop />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/kitchen" element={<KitchenPage />} />
            {kitchenRoutes.map((route) => {
              const Component = templates[route.template]; // Получаем компонент из объекта
              return (
                <Route
                  key={route.slug}
                  path={`/kitchen/${route.slug}`}
                  element={
                    Component ? (
                      <EmeraldKitchen />
                    ) : (
                      <div>Template Not Found</div>
                    )
                  }
                />
              );
            })}
            <Route path="/kitchen/SmartKitchen" element={<SmartKitchen />} />
            <Route path="/kitchen/KitchenTop" element={<KitchenTop />} />
            <Route path="/kitchen/VivaKitchen" element={<VivaKitchen />} />
            <Route path="/shkaf" element={<Shkaf />} />
            <Route path="/prikhozhie" element={<Prikhozhie />} />
            <Route path="/garderobnye" element={<Garderobnye />} />
            <Route path="/kontakty" element={<Kontakty />} />
            {/* <Route path="/kukhnya-izumrud" element={<KukhnyaIzumrud />} /> */}
            <Route path="/rabochie-zony" element={<RabochieZony />} />
            <Route path="/Typography" element={<Typography />} />
          </Routes>
        </AppRoot>
      </Router>
    </AppRoot>
  );
}

export default App;
