import * as React from 'react';
import { DataGrid  } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';

import "./TodosTable.scss";

export default function TodosTable() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 20,
    maxColumns: 6,
  }); 

  console.log(data);
  

  return (
    <div 
      className="w-100" 
      style={{height: "calc(100vh - 10rem)"}}
    >
      <DataGrid
        loading={!data}
        columns={data.columns}
        rows={data.rows}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        pagination/>
    </div>
  );
}