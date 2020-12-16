
import React, { useState } from 'react';
import TodosTable from './TodosTable/TodosTable';

import "./Home.scss";
import SortTask from '../../Components/SortToolbar/SortToolbar';
import TodoDetail from './TodoDetail/TodoDetail';

function Home() {

  const [name, setName] = useState("Trung Banh")
  const [toDay] = useState(new Date())

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
        <TodosTable/>
        <TodoDetail/>
      </div>
    </div>
  );
}

export default Home;