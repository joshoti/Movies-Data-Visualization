import { useContext } from "react";
import { Table } from "@mantine/core";
import { QueryTableContext } from "../../hooks/QueryTableProvider";
import { TableHeaderMap, TableHeaders } from "./Table";
import classes from "./Query.module.css";

/**
 * When the table is queried, users can specify what columns to display.
 * This means the table is rendered differently depending on the query
 * executed. This component helps with the rendering
 * @returns DynamicTable component
 */
export function DynamicTable() {
  const tableContext = useContext(QueryTableContext);

  const tableRows = tableContext.tableData.map((row, index) => (
    <Table.Tr key={index}>
      {Object.keys(row).map((key: string) =>
        tableContext.isColumnContained(key) ? (
          <Table.Td>{row[key as keyof TableHeaders]}</Table.Td>
        ) : null
      )}
    </Table.Tr>
  ));

  return (
    <Table withColumnBorders verticalSpacing="sm" horizontalSpacing="md">
      <Table.Thead>
        <Table.Tr className={classes.tableHeader}>
          {Object.keys(TableHeaderMap).map((column) =>
            tableContext.isColumnContained(column) ? (
              <Table.Th>
                {TableHeaderMap[column as keyof TableHeaders]}
              </Table.Th>
            ) : null
          )}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody className={classes.tableBody}>{tableRows}</Table.Tbody>
    </Table>
  );
}
