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
    <Flex align="flex-start">
      <RobotChatIcon />
      <Text fw={450} fz={17}>
        {message}
      </Text>
    </Flex>
  );
}

function UserMessage({ message }: Message) {
  return (
    <Flex justify="end">
      <Paper p={15} maw={400} radius="lg">
        {message}
      </Paper>
    </Flex>
  );
}
