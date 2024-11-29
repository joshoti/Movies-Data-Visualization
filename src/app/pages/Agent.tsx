import { ProbeHeader } from "../components/LLMAgent/ProbeHeader";
import { PredictHeader } from "../components/LLMAgent/PredictHeader";
import { RedirectToAnalysis } from "./RedirectToHome";
import { ChatSpace } from "../components/LLMAgent/ChatSpace";
import { InputField } from "../components/LLMAgent/InputField";
import { Divider } from "@mantine/core";
import { Flex } from "@mantine/core";
import { ChatProvider } from "../hooks/ChatProvider";

export function LLMAgentTemplate({ application }: any) {
  return (
    <ChatProvider>
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
          <ChatSpace application={application} />
        </div>
        <InputField application={application} />
      </Flex>
    </ChatProvider>
  );
}
