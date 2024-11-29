import { createContext, useState } from "react";
import { table } from "../components/Query/Table";
import { TableHeaders } from "../components/Query/Table";

type QueryTableContextT = {
  tableData: TableHeaders[];
  setTableData: React.Dispatch<React.SetStateAction<TableHeaders[]>>;
};

export const QueryTableContext = createContext<QueryTableContextT>(
  {} as QueryTableContextT
);

export const TableProvider = ({ children }: any) => {
  const [tableData, setTableData] = useState<TableHeaders[]>(table);

  return (
    <QueryTableContext.Provider
      value={{
        tableData,
        setTableData,
      }}
    >
      {children}
    </QueryTableContext.Provider>
  );
};
