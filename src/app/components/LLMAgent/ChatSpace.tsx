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
    <div
      style={{
        backgroundColor: "whitesmoke",
        paddingLeft: 50,
        paddingRight: 50,
      }}
    >
      {sampleMessages.map(({ role, message }) => (
        <MessageBubble role={role} message={message} />
      ))}
    </div>
  );
}
