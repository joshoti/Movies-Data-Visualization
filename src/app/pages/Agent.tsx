import { ProbeHeader } from "../components/LLMAgent/ProbeHeader";
import { PredictHeader } from "../components/LLMAgent/PredictHeader";
import { RedirectToAnalysis } from "./RedirectToHome";
import { ChatSpace } from "../components/LLMAgent/ChatSpace";
import { InputField } from "../components/LLMAgent/InputField";
import { Divider } from "@mantine/core";
import { Flex } from "@mantine/core";

export function LLMAgentTemplate({ application }: any) {
  return (
    <Flex direction={"column"} h={"100%"}>
      <div
        style={{
          flex: 1,
          padding: "20px",
          overflowY: "auto",
        }}
      >
        {application === "probe" ? (
          <ProbeHeader />
        ) : application === "predict" ? (
          <PredictHeader />
        ) : (
          <RedirectToAnalysis />
        )}
        <Divider />
        <ChatSpace />
      </div>
      <InputField application={application} />
    </Flex>
  );
}
