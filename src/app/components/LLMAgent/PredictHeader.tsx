import { Text, Flex, Title, Group } from "@mantine/core";
import classes from "./LLMAgent.module.css";
import { RobotHeaderIcon } from "./RobotIcon";
import { marginTop } from "../Analysis/Analysis";

export function PredictHeader() {
  return (
    <Flex direction="column">
      <Flex align="center" justify="center">
        <Title mt={marginTop / 2} mb={marginTop / 2} className={classes.title}>
          Predict
        </Title>
        <RobotHeaderIcon />
      </Flex>
      <Group justify="center">
        <Text mb={10} className={classes.regularText}>
          Ask questions not directly contained in the table but related to it.
        </Text>
      </Group>
    </Flex>
  );
}
