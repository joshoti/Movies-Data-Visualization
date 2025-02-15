import { createContext, useState } from "react";
import { defaultTable, TableHeaders } from "../components/Query/Table";

type QueryTableContextT = {
  tableData: TableHeaders[];
  setTableData: React.Dispatch<React.SetStateAction<TableHeaders[]>>;
  isColumnContained: (columnName: string) => boolean;
};

export const QueryTableContext = createContext<QueryTableContextT>(
  {} as QueryTableContextT
);

export const TableProvider = ({ children }: any) => {
  const [tableData, setTableData] = useState<TableHeaders[]>(defaultTable);

  const isColumnContained = (columnName: string) => {
    if (tableData.length === 0) {
      return true;
    }
    return tableData[0].hasOwnProperty(columnName);
  };

  return (
    <QueryTableContext.Provider
      value={{
        tableData,
        setTableData,
        isColumnContained,
      }}
    >
      {children}
    </QueryTableContext.Provider>
  );
};
