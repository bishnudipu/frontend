import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Button, Tab, Tabs } from "@material-ui/core";
import "./topbar.css";
import HomeIcon from "@mui/icons-material/Home";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export default function TopBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
            <HomeIcon />
        </IconButton>
        <p>DashBoard</p>
      </MenuItem>

      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <EventAvailableIcon/>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem >
        <IconButton
          size="large"
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
    <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            style={{ background: "transparent", boxShadow: "none" }}
          >
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                AKS Technologies
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Button
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                  startIcon={<HomeIcon />}
                  style={{
                    backgroundColor: "#d04a02",
                    height: "30px",
                    marginRight: "10px",
                    borderRadius: "20px",
                    fontSize: "10px",
                  }}
                >
                  Dashboard
                </Button>
                <Button
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                  startIcon={<EventAvailableIcon />}
                  style={{
                    // backgroundColor: "#d04a02",
                    height: "30px",
                    fontSize: "10px",
                  }}
                >
                  NOTIFICATIONS
                </Button>
                <Button
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                  endIcon={<AccountCircleIcon />}
                  style={{
                    // backgroundColor: "#d04a02",
                    height: "30px",
                    fontSize: "10px",
                  }}
                >
                  Hi Stephen
                </Button>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
          {renderMenu}
        </Box>

        {/* <Box style={{ display: "flex" }}>
          <Tabs
            value={value}
            style={{
              color: "white",
            }}
            onChange={handleTabs}
          >
            <Tab label="RFP Products" />
            <Tab label="Follow ups" />
          </Tabs>
          <Box
            style={{
              float: "right",
              position: "absolute",
              right: "40px",
              marginTop: "6px",
            }}
          >
            <Typography
              variant="h5"
              style={{
                color: "white",
              }}
            >
              Good Morning, Stephen
            </Typography>
          </Box>
        </Box> */}
      {/* </div> */}
      {/* <TabPannel value={value} index={0}>
        <RfpProducts />
      </TabPannel>
      <TabPannel value={value} index={1}>
        {" "}
        Products
      </TabPannel>
      <TabPannel value={value} index={2}>
        RFP{" "}
      </TabPannel> */}
    </>
  );
}
