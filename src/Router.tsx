import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LandingPageLayout } from "./app/pages/LandingPage";
import { RedirectToHome } from "./app/pages/RedirectToHome";

import { Analysis } from "./app/components/Analysis/Analysis";
import { DocsLogin } from "./app/components/Analysis/DocsLogin";
import { DocsWebhooks } from "./app/components/Analysis/DocsWebhooks";
import { ScrollToTop } from "./app/utils/scoll";

export function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPageLayout />}>
          <Route path="analysis" element={<Analysis />} />
          <Route path="probe" element={<DocsLogin />} />
          <Route path="predict" element={<DocsWebhooks />} />
        </Route>
        <Route path="*" element={<RedirectToHome />} />
      </Routes>
    </BrowserRouter>
  );
}
