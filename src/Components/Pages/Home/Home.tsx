import {
  Button, ListItemIcon, ListItemText, Menu, MenuItem, MenuProps, withStyles
} from '@material-ui/core';
import { Sort, Send, Drafts, Inbox } from '@material-ui/icons';
import React, { useState } from 'react';

import "./Home.scss";


export default function Home() {

  const [anchorElSort, setAnchorElSort] = React.useState<null | HTMLElement>(null);

  const [name, setName] = useState("Trung Banh")
  const [toDay] = useState(new Date())

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElSort(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElSort(null);
  };


  return (
    <div>
      <div className="toolbar-top">
        <div className="toolbar-headline">
          <h2 className="title-page"> Hello {name} </h2>
          <h5 className="subtitle-page"> To day : {toDay.toDateString()} </h5>
        </div>
        <Button
          className="toolbar-meta text-button"
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="text"
          size="small"
          onClick={(event) => {
            handleClick(event)
          }}
        >
          <span className="toolbar-sort">
            <Sort className="align-middle pr-1" />
            Sort Task
          </span>
        </Button>

        <Menu
          id="customized-menu"
          anchorEl={anchorElSort}
          keepMounted
          elevation={0}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={Boolean(anchorElSort)}
          onClose={handleClose}
        >
          <MenuItem>
            <ListItemIcon>
              <Send fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Sent mail" />
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Drafts fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Inbox fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </MenuItem>
        </Menu>
      </div>

    </div>
  );
}