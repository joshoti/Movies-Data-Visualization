import { Text, Flex, Title, Paper } from "@mantine/core";
import classes from "./LLMAgent.module.css";
import { marginTop } from "../Analysis/Analysis";
import { MessageBubble } from "./MessageTemplate";

export function ChatSpace() {
  const sampleMessages = [
    { role: "user", message: "How are you today?" },
    { role: "agent", message: "Piss off" },
    { role: "user", message: "excuse you?" },
  ];

  return (
    <>
      {sampleMessages.map(({ role, message }) => (
        <MessageBubble role={role} message={message} />
      ))}
    </>
  );
}
