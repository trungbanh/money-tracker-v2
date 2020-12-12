import * as React from 'react';
import { DataGrid  } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';

export default function TodoDetail() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 6,
  });

  return (
    <div >
      <DataGrid {...data} />
    </div>
  );
}