import { Text, Flex, Paper } from "@mantine/core";
import { RobotChatIcon } from "./RobotIcon";

export type MessageBubbleArgs = {
  role: string;
  message: string;
};

export function MessageBubble({ role, message }: MessageBubbleArgs) {
  const messageMargin = 20;

  return (
    <div style={{ marginTop: messageMargin, marginBottom: messageMargin }}>
      {role === "user" ? (
        <UserMessage message={message} />
      ) : (
        <AgentMessage message={message} />
      )}
    </div>
  );
}

type Message = {
  message: string;
};

function AgentMessage({ message }: Message) {
  return (
    <Flex align="flex-start">
      <RobotChatIcon />
      <Text flex={1} style={{ textAlign: "justify" }} fw={450} fz={17}>
        {message}
      </Text>
    </Flex>
  );
}

function UserMessage({ message }: Message) {
  return (
    <Flex justify="end">
      <Paper bg={"whitesmoke"} p={15} maw={500} radius="lg">
        {message}
      </Paper>
    </Flex>
  );
}
