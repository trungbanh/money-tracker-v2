import { Button, ListItemIcon, ListItemText, Menu, MenuItem } from '@material-ui/core';
import { Drafts, Inbox, Send, Sort } from '@material-ui/icons';
import React from 'react';

import './SortToobar.scss';

export default function SortTask(props: any) {

  const [anchorElSort, setAnchorElSort] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElSort(event.currentTarget);
  }; 

  const handleClose = () => {
    setAnchorElSort(null);
  };

  return (
    <React.Fragment>
      <Button
        className="toolbar-meta text-button"
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="text"
        size="small"
        onClick={(event: any) => {
          handleClick(event);
        } }
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
    </React.Fragment>
  );
}
