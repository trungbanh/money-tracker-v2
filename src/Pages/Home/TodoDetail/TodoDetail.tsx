import * as React from 'react';
import { createStyles, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Paper, Theme } from '@material-ui/core';

import '../TodoDetail/TodoDetail.scss';
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginRight: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  }),
);


export default function TodoDetail() {
  const classes = useStyles();

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
          <h5>{"task name"}</h5>
        </Paper>
        <Paper variant="outlined" square > 
          <h6>Time and Date</h6>
          <p>
            remind me 
          </p> 
        </Paper>

        <Paper variant="outlined" >
          Tag
        </Paper>

        <Paper variant="outlined">
          <textarea placeholder={"decription"}/>
        </Paper>
      </div>
    </div>
  );
}