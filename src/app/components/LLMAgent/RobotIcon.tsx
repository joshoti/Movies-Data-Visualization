import { Flex } from "@mantine/core";
import { IconRobot } from "@tabler/icons-react";
const robotColor = "black";

export function RobotHeaderIcon() {
  return <IconRobot size={45} color={robotColor} />;
}

export function RobotChatIcon() {
  const backgroundRadius = 40;
  return (
    <Flex
      justify="center"
      align="center"
      style={{
        backgroundColor: "whitesmoke",
        border: "1px solid gray",
        borderRadius: 100,
        height: backgroundRadius,
        width: backgroundRadius,
      }}
    >
      <IconRobot size={30} color={robotColor} />
    </Flex>
  );
}
