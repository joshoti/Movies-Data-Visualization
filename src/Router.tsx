import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPageLayout } from "./app/pages/LandingPage";
import { RedirectToAnalysis } from "./app/pages/RedirectToHome";
import { ScrollToTop } from "./app/utils/scoll";
import { QueryTable } from "./app/pages/Query";
import { AnalysisCharts } from "./app/pages/Analysis";
import { LLMAgentTemplate } from "./app/pages/Agent";

export function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPageLayout />}>
          <Route path="analysis" element={<AnalysisCharts />} />
          <Route path="query" element={<QueryTable />} />
          <Route
            path="probe"
            element={<LLMAgentTemplate application={"probe"} />}
          />
          <Route
            path="predict"
            element={<LLMAgentTemplate application={"predict"} />}
          />
        </Route>
        <Route path="*" element={<RedirectToAnalysis />} />
      </Routes>
    </BrowserRouter>
  );
}
