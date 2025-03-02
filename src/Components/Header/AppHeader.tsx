import React from 'react';
import {AppBar,
  Toolbar, 
  IconButton, 
  Typography, 
  InputBase,
  Badge,
  MenuItem,
  Menu,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import clsx from 'clsx';


import{ 
  Menu as MenuIcon, 
  Search, 
  Mail, 
  Notifications,
  More, 
  FormatListNumberedTwoTone, 
  AssessmentTwoTone, 
  AccountBalanceWalletTwoTone,
  AccountCircle,
  HomeTwoTone,
  ListAltTwoTone
} from '@material-ui/icons';

import "./AppHeader.scss"

export default function AppHeader() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [open, setOpen] = React.useState(false);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <Mail />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <Notifications />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <AppBar 
        position="fixed"
        className={
          clsx('appBar')
        }>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={'menuButton'}
          >
            <MenuIcon />
          </IconButton>
          <Typography className="title" variant="h6" noWrap>
            Material-UI
          </Typography>
          <div className="search">
            <div className="searchIcon">
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              className=" inputRoot MuiInputBase-inputTypeSearch Mui-focused"
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className="grow" />
          <div className="sectionDesktop">
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <Mail />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <Notifications />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className="sectionMobile">
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <More />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}

      <Drawer
        variant="permanent"
        className={clsx("drawer", {
          "drawerOpen": open,
          "drawerClose": !open,
        })}
        classes={{
          paper: clsx({
            "drawerOpen": open,
            "drawerClose": !open,
          }),
        }}
        >
        <div className='toolbar' >
        </div>
        <Divider />
        <List>
            <ListItem button component="a" href="/">
              <ListItemIcon><HomeTwoTone/></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><ListAltTwoTone/></ListItemIcon>
              <ListItemText primary="List ToDos" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><FormatListNumberedTwoTone/></ListItemIcon>
              <ListItemText primary="List Targets" />
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button>
              <ListItemIcon><AssessmentTwoTone/></ListItemIcon>
              <ListItemText primary="Cost Statistics" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><AccountBalanceWalletTwoTone/></ListItemIcon>
              <ListItemText primary="Wallet" />
            </ListItem>

        </List>
      </Drawer>
    </div>
  );
} 
