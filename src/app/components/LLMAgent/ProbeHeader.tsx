import { Text, Flex, Title, Group } from "@mantine/core";
import classes from "./LLMAgent.module.css";
import { RobotHeaderIcon } from "./RobotIcon";
import { marginTop } from "../Analysis/Analysis";

export function ProbeHeader() {
  return (
    <Flex direction="column">
      <Flex align="center" justify="center">
        <Title
          id="head"
          mt={marginTop / 2}
          mb={marginTop / 2}
          className={classes.title}
        >
          Probe
        </Title>
        <RobotHeaderIcon />
      </Flex>
      <Group justify="center">
        <Text mb={10} className={classes.regularText}>
          Ask questions related to the table
        </Text>
      </Group>
    </Flex>
  );
}
