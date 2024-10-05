import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import Home from "./pages/Home";
import Tracking from "./pages/Tracking";
import AppLayout from "./components/AppLayout";
import { useLang } from "./context/useLang";
import "./utils/lang";
import NotFound from "./pages/NotFound";
import { ShipmentProvider } from "./context/ShipmentContext";

const App = () => {
  const { t } = useTranslation();
  const { lang } = useLang();

  useEffect(() => {
    window.document.dir = i18n.dir();
    document.title = t("NAVBAR.TITLE");
  }, [lang, t]);

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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
