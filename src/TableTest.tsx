import { DataGridPremium, useGridApiRef } from "@mui/x-data-grid-premium";
import * as React from "react";

export default function TableTest() {
  const [isToggled, setIsToggled] = React.useState(false);
  const apiRef = useGridApiRef();

  const columns = ["name"];
  const columnDef = columns.map((col) => ({
    field: col,
  }));

  const rows = [{ name: "e39e" }, { name: "2eb4" }];

  const getTreeDataPath = ({ path }) => path;
  const groupingColDef = { valueGetter: () => JSON.stringify(isToggled) };

  return (
    <>
      <DataGridPremium
        treeData
        getTreeDataPath={getTreeDataPath}
        groupingColDef={groupingColDef}
        rows={rows.map((row) => ({ ...row, id: row.name, path: [row.name] }))}
        columns={columnDef}
        apiRef={apiRef}
        initialState={{ pinnedColumns: { left: ["name"] } }}
      />
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
    </>
  );
}
