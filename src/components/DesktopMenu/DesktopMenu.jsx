import React, { useState } from "react";
import { Drawer } from "@mui/material";
import DesktopMenuList from "./DesktopMenuList";

function DesktopMenu() {
  return (
    <Drawer
      sx={{
        // backgroundColor: "white",
        height: "40rem",
        bgcolor: "white",
        // borderRadius: "5%",
      }}
    >
      <DesktopMenuList sx={{ maxWidth: "10rem" }} />
    </Drawer>
  );
}

export default DesktopMenu;
