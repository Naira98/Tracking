import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Home from "./pages/Home";
import Tracking from "./pages/Tracking";
import AppLayout from "./components/Layout/AppLayout";
import "./utils/lang";
import NotFoundPage from "./pages/NotFoundPage";
import { ShipmentProvider } from "./context/ShipmentContext";

const App = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.document.dir = i18n.dir();
    document.documentElement.setAttribute("lang", i18n.language);
    document.title = t("NAVBAR.TITLE");
  }, [i18n, t]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/track-shipments/:trackingNumber"
            element={
              <ShipmentProvider>
                <Tracking />
              </ShipmentProvider>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
