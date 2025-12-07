import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import type { MenuItem } from "../../../../main.interface";

const drawerWidth = 240;

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems: MenuItem[] = [
    { text: "Dashboard", icon: <HomeIcon />, link: "/" },
    { text: "Slots", icon: <InfoIcon />, link: "slots" },
    { text: "Profile", icon: <InfoIcon />, link: "" },
    { text: "Logout", icon: <InfoIcon />, link: "" },
  ];

  const drawerContent = (
    <div className="w-60">
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigate(`${item.link}`)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className="flex">
      <CssBaseline />

      {/* App Bar */}
      {!isDesktop && (
        <AppBar
          position="fixed"
          className="bg-blue-600"
          style={{ width: "100%" }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              className="mr-2"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Admin Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      {/* Drawer */}
      {isDesktop ? (
        <Drawer
          variant="permanent"
          open
          className="w-60 flex-shrink-0"
          PaperProps={{ style: { width: drawerWidth } }}
        >
          {drawerContent}
        </Drawer>
      ) : (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={toggleDrawer}
          ModalProps={{ keepMounted: true }}
        >
          {drawerContent}
        </Drawer>
      )}

      {/* Main Content */}
      {/* <main
        className={`flex-1 p-4 mt-16`}
        style={{ marginLeft: isDesktop ? drawerWidth : 0 }}
      >
        <Typography variant="h4">Welcome to My App!</Typography>
        <p className="mt-4 text-gray-700">
          This content adjusts to sidebar and screen size.
        </p>
      </main> */}
    </div>
  );
};

export default Navbar;
