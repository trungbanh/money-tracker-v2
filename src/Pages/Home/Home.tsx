
import React, { useReducer, useState } from 'react';
import TodosTable from './TodosTable/TodosTable';

import "./Home.scss";
import SortTask from '../../Components/SortToolbar/SortToolbar';
import TodoDetail from './TodoDetail/TodoDetail';

import {Todo} from '../../Models/Todo';

const rowSelectedInit = {
  row : {} as Todo
}

function reducer ( state: any, action: any ) {
  switch (action.type) {
    case 'ROW_CLICK':
      return {row: action.payload.row}
    default :
      throw Error();
  } 
}

function Home() {

  const [ state, dispatch ] = useReducer(reducer, rowSelectedInit)
  const [name, setName] = useState("Trung Banh")
  const [toDay] = useState(new Date())

  console.log(state); 
  

  return (
    <div className="flex-column">
      <div className="toolbar-top">
        <div className="toolbar-headline">
          <h2 className="title-page"> Hello {name} </h2>
          <h5 className="subtitle-page"> To day : {toDay.toDateString()} </h5>
        </div>
        <SortTask/>
      </div>
      <div className={"d-flex flex-row"}>
        <TodosTable onTodoClick={dispatch}/>
        {
          state.row?.id &&
          <TodoDetail toddDetails={state.row}/>
        }
      </div>
    </div>
  );
}

export default Home;