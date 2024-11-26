import { ProbeHeader } from "../components/LLMAgent/ProbeHeader";
import { PredictHeader } from "../components/LLMAgent/PredictHeader";
import { RedirectToAnalysis } from "./RedirectToHome";
import { ChatSpace } from "../components/LLMAgent/ChatSpace";

export function LLMAgentTemplate({ application }: any) {
  return (
    <>
      {application === "probe" ? (
        <ProbeHeader />
      ) : application === "predict" ? (
        <PredictHeader />
      ) : (
        <RedirectToAnalysis />
      )}
      <ChatSpace />
      {/* < MessageBox application={application} /> */}
    </>
  );
}
