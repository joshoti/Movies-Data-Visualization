import { Query } from "../components/Query/Query";
import { TableProvider } from "../hooks/QueryTableProvider";

export function QueryTable() {
  return (
    <TableProvider>
      <Query />
    </TableProvider>
  );
}
