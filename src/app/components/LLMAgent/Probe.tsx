import { Text, Flex, Title, Paper, Group } from "@mantine/core";
import classes from "./LLMAgent.module.css";
import { useEffect } from "react";
import { docsScrollOptions } from "../../pages/LandingPage";
import { scrollToElement } from "../../utils/scoll";
import { RobotHeaderIcon } from "./RobotIcon";

export function Probe() {
  // To scroll to the top manually
  // Edit this to scroll to bottom automatically
  useEffect(() => {
    scrollToElement("head", docsScrollOptions);
  });

  const marginTop = 40;

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
      <Flex flex={1} direction="column">
        <Title
          id="prerequisites"
          mt={marginTop}
          mb={marginTop / 2}
          className={classes.title}
        >
          Prerequisites
        </Title>
        <Text mb={10} className={classes.regularText}>
          Step by step guide to set up your login flow
        </Text>

        <Text mb={15} fw={"bold"} className={classes.regularText}>
          Example Integration (cURL)
        </Text>
        <Paper bg={"#f1f3f5"} className={classes.codeContainer}>
          <Text className={classes.code}>
            curl -X POST{" "}
            <Text span className={classes.codeRed}>{`'/api/users/login'`}</Text>
          </Text>
          <Text className={`${classes.code} ${classes.codeIndent}`}>
            -H{" "}
            <Text span className={classes.codeRed}>
              {`'Content-Type: application/json'`}
            </Text>
          </Text>
          <Text className={`${classes.code} ${classes.codeIndent}`}>
            -d{" "}
            <Text span className={classes.codeRed}>
              {`'{"email": "user@example.com", "password": "securePass123"}'`}
            </Text>
          </Text>
        </Paper>
      </Flex>
    </Flex>
  );
}
