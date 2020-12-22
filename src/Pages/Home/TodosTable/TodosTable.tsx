import React, { useContext, useEffect, useState } from 'react';
import { observer } from "mobx-react-lite"

import { DataGrid } from '@material-ui/data-grid';
import { todoStore } from '../../../Services/todo.service';
import "./TodosTable.scss";

const colummField = [
  {
    "field": "id", "hide": true
  },
  {
    "field": "title", "headerName": "Title"
  },
  {
    "field": "time", "headerName": "Time",
  },
  {
    "field": "detail",
    "headerName": "Detail",
  },
  {
    "field": "tag",
    "headerName": "Tags",
    "type": "number",
  },
]


function TodosTable({onTodoClick} : any) {

  const [data, setData]: any = useState();

  const dataTodos = useContext(todoStore);

  useEffect(() => {
    if (!data) {
      dataTodos.loadTodos();
    }
    if (dataTodos.todo) {
      setData(dataTodos.todo);
    }
  }, [data, dataTodos.todo]);

  return (
    <div
      className="w-100"
      style={{ height: "calc(100vh - 10rem)" }}
    >
      {data &&
        <DataGrid
          onRowClick={(item)=>{
            onTodoClick({
              type:'ROW_CLICK',
              payload: {
                row: Object.assign({}, item.data)
              }
            })
          }}
          columns={colummField}
          rows={data?.rows}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          pagination />
      }
    </div>
  );
}

export default observer(TodosTable);