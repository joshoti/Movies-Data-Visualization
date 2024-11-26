import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPageLayout } from "./app/pages/LandingPage";
import { RedirectToAnalysis } from "./app/pages/RedirectToHome";
import { Analysis } from "./app/components/Analysis/Analysis";
import { DocsLogin } from "./app/components/Analysis/DocsLogin";
import { ScrollToTop } from "./app/utils/scoll";
import { QueryTable } from "./app/components/Query/Query";

export function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPageLayout />}>
          <Route path="analysis" element={<Analysis />} />
          <Route path="query" element={<QueryTable />} />
          <Route path="probe" element={<DocsLogin />} />
          <Route path="predict" element={<DocsLogin />} />
        </Route>
        <Route path="*" element={<RedirectToAnalysis />} />
      </Routes>
    </BrowserRouter>
  );
}
