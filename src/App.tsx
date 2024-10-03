import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import Home from "./pages/Home";
import Tracking from "./pages/Tracking";
import AppLayout from "./components/AppLayout";
import { useLang } from "./context/useLang";
import "./utils/lang";
import NotFound from "./pages/NotFound";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 60 * 1000 } },
  });
  const { t } = useTranslation();
  const { lang } = useLang();

  useEffect(() => {
    window.document.dir = i18n.dir();
    document.title = t("title");
  }, [lang, t]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/track-shipments/:trackingNumber"
              element={<Tracking />}
            />
          <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
