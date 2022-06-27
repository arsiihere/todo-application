import { TextField, Box, Button, useContext } from "@mui/material";
import TodoContext from "../store/todo-context";
import { styled } from "@mui/material/styles";

import React from "react";
import { motion } from "framer-motion";

const FormInput = styled(TextField)(({ theme }) => ({
  "& ::after": {
    borderBottom: `2px solid ${theme.palette.warning.light} !important`,
  },
}));

function Form() {
  return (
    <Box
      component="motion.div"
      animate={{ x: 360 }}
      transiton={{ duration: 2 }}
      exit={{ opacity: 0 }}
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(47, 57, 79,0.99)",
        zIndex: "1000",

        position: "absolute",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minWidth: "40rem",
          gap: "20px",
          margin: "auto",
        }}
      >
        <FormInput variant="standard" label="Email" />
        <FormInput variant="standard" label="Password" />
        <Button variant="contained" disableElevation color="warning">
          Log In
        </Button>
      </Box>
    </Box>
  );
}

export default Form;
