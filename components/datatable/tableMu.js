import * as React from 'react';
import { DataGrid,GridToolbar } from '@mui/x-data-grid';




export default function TableMu({data}) {
    let columns = [];
    for (const property in data[0]) {
        columns.push({ field: property, headerName: property.toUpperCase(), width: 100 });
}
let rows =[];
  for (const property in data) {
      data[property].id = Math.random();
        rows.push(data[property]);

  }
  return (
    <div style={{ height: 900, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
}
