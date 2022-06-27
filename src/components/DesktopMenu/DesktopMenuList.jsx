import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { useLocation, NavLink } from "react-router-dom";

import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";
function DesktopMenuList(props) {
  const menuList = [
    { name: "Dashboard", icon: DonutSmallIcon, to: "/" },
    { name: "All Todo", icon: PlaylistAddCheckIcon, to: "/Todo" },
    { name: "Add New Todo", icon: AddIcon, to: "/AddTodo" },
  ];
  let activeStyle = {
    textDecoration: "none",
    // backgroundColor: "yellow",
    color: "#ffc148",
  };

  let activeClassName = {
    textDecoration: "none",
    color: "grey",
  };

  // console.log(location);
  return (
    <Box
      sx={{
        backgroundColor: "white",
        minWidth: "20rem",
        borderRadius: 10,
      }}
    >
      <List sx={{ display: "flex", flexDirection: "column", height: "40rem" }}>
        {menuList?.map((listItem) => (
          <NavLink
            to={listItem.to}
            style={({ isActive }) => (isActive ? activeStyle : activeClassName)}
          >
            <ListItem>
              <ListItemButton>
                <ListItemIcon>{<listItem.icon />}</ListItemIcon>
                <ListItemText primary={listItem.name} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
        <ListItem sx={{ flexGrow: 1 }}>
          <ListItemButton
            sx={{
              alignSelf: "flex-end",
            }}
          >
            <ListItemIcon>
              <LogoutIcon sx={{ color: "red" }} />
              <ListItemText sx={{ color: "red" }} primary={"Log Out"} />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default DesktopMenuList;
