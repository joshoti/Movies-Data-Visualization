import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPageLayout } from "./app/pages/LandingPage";
import { RedirectToAnalysis } from "./app/pages/RedirectToHome";
import { Analysis } from "./app/components/Analysis/Analysis";
import { Probe } from "./app/components/LLMAgent/Probe";
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
          <Route path="probe" element={<Probe />} />
          <Route path="predict" element={<Probe />} />
        </Route>
        <Route path="*" element={<RedirectToAnalysis />} />
      </Routes>
    </BrowserRouter>
  );
}
