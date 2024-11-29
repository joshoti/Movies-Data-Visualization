import { Text, Flex, Title, Box } from "@mantine/core";
import classes from "./Query.module.css";
import { marginTop } from "../Analysis/Analysis";
import QueryBox from "./QueryBox";
import { DynamicTable } from "./DynamicTable";

export function Query() {


  return (
    <Flex>
      <Flex direction="column">
        <Title
          id="head"
          mt={marginTop / 2}
          mb={marginTop / 2}
          className={classes.title}
        >
          Query
        </Title>
        <Text mb={10} className={classes.regularText}>
          Query the table
        </Text>
        <QueryBox />
        <Box className={classes.table}>
          <DynamicTable />
        </Box>
      </Flex>
    </Flex>
  );
}
