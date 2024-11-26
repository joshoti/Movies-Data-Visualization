import { Text, Flex, Paper } from "@mantine/core";
import { RobotChatIcon } from "./RobotIcon";

type MessageBubbleArgs = {
  role: string;
  message: string;
};

export function MessageBubble({ role, message }: MessageBubbleArgs) {
  return (
    <>
      {role === "user" ? (
        <UserMessage message={message} />
      ) : (
        <AgentMessage message={message} />
      )}
    </>
  );
}

type Message = {
  message: string;
};

function AgentMessage({ message }: Message) {
  return (
    <Flex align="center">
      <RobotChatIcon />
      <MessageBox message={message} />
    </Flex>
  );
}

function UserMessage({ message }: Message) {
  return <MessageBox message={message} />;
}

function MessageBox({ message }: Message) {
  return <Paper radius="md">{message}</Paper>;
}
