import { Text, Flex, Title, Table, Box } from "@mantine/core";
import classes from "./Query.module.css";
import { table } from "../data/Table";
import { marginTop } from "../Analysis/Analysis";

export function Query() {
  const tableRows = table.map((row) => (
    <Table.Tr key={row.Movie_Title}>
      <Table.Td>{row.Movie_Title}</Table.Td>
      <Table.Td>{row.Year}</Table.Td>
      <Table.Td>{row.Director}</Table.Td>
      <Table.Td>{row.Actors}</Table.Td>
      <Table.Td>{row.Rating}</Table.Td>
      <Table.Td>{row["Runtime(Mins)"]}</Table.Td>
      <Table.Td>{row.Censor}</Table.Td>
      <Table.Td>{row.Total_Gross}</Table.Td>
      <Table.Td>{row.main_genre}</Table.Td>
      <Table.Td>{row.side_genre}</Table.Td>
    </Table.Tr>
  ));

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
        <Box className={classes.table}>
          <Table withColumnBorders verticalSpacing="sm" horizontalSpacing="md">
            <Table.Thead>
              <Table.Tr className={classes.tableHeader}>
                <Table.Th>Movie Title</Table.Th>
                <Table.Th>Year</Table.Th>
                <Table.Th>Director</Table.Th>
                <Table.Th>Actors</Table.Th>
                <Table.Th>Rating</Table.Th>
                <Table.Th>Runtime (Mins)</Table.Th>
                <Table.Th>Censor</Table.Th>
                <Table.Th>Total Gross</Table.Th>
                <Table.Th>Main Genre</Table.Th>
                <Table.Th>Side Genre</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody className={classes.tableBody}>{tableRows}</Table.Tbody>
          </Table>
        </Box>
      </Flex>
    </Flex>
  );
}
