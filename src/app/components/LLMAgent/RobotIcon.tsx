import { Flex } from "@mantine/core";
import { IconRobot } from "@tabler/icons-react";

const robotColor = "black";

export function RobotHeaderIcon() {
  return <IconRobot size={45} color={robotColor} />;
}

export function RobotChatIcon() {
  const backgroundRadius = 35;

  return (
    <Flex
      justify="center"
      align="center"
      style={{
        marginRight: 10,
        backgroundColor: "whitesmoke",
        border: "1px solid gray",
        borderRadius: backgroundRadius / 2,
        height: backgroundRadius,
        width: backgroundRadius,
      }}
    >
      <IconRobot size={backgroundRadius - 10} color={robotColor} />
    </Flex>
  );
}
