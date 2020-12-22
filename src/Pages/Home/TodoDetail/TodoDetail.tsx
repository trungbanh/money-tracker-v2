import * as React from 'react';
import { createStyles, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Paper, Theme } from '@material-ui/core';

import '../TodoDetail/TodoDetail.scss';

export default function TodoDetail({ toddDetails }: any) {

  return (
    <div className={"ml-1 mr-1 border rounded"}>
      <div
        className={"detail-sidebar p-1"}
        style={{
          width: "240px",
        }}
      >
        <Paper
          variant="outlined" >
          <h5>{toddDetails.title}</h5>
        </Paper>
        <Paper variant="outlined" square >
          <h6>Time and Date: {toddDetails.time}</h6>
          <p>
            remind me
          </p>
        </Paper>
        <Paper variant="outlined" >
          {toddDetails.tag}
        </Paper>

        <Paper variant="outlined">
          <textarea placeholder={"decription"} value={toddDetails.detail} />
        </Paper>
      </div>
    </div>
  )
}