import { Sort } from '@material-ui/icons';
import React, { useState } from 'react';

import "./Home.scss";

export default function Home() {
  const [ name, setName ] = useState("Trung Banh")
  
  const [toDay] = useState(new Date())
  return (
    <div>
      <div className="toolbar-top">
        <div className="toolbar-headline">
          <h2 className="title-page"> Hello {name} </h2> 
          <h5 className="subtitle-page"> To day : {toDay.toDateString()} </h5>
        </div>
        <div className="toolbar-meta">
          <span className=""
            style={{
              fontWeight: "lighter",
              fontSize:"1.4rem",
              alignItems: "center",
              paddingRight: "0.2rem"
            }}
          >Sort Task</span> 
          <Sort/>
        </div>
      </div>
    </div>
    
  );
}