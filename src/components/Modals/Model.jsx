import React, { useState, useEffect } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";

function UpdateModal(props) {
  const [inputValue, setInputValue] = useState(props.item.name);

  useEffect(() => {
    setInputValue(props.item.name);

    return () => {
      setInputValue("");
    };
  }, [props.item.name]);

  return (
    <Modal
      open={props.open}
      onClose={() => {
        props.SetModal(false);
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
          maxWidth: "40rem",
          height: "20rem",
          margin: "auto",
          transform: "translateY(50%)",
        }}
      >
        <TextField
          sx={{ display: "block", paddingTop: "2rem", paddingLeft: "2rem" }}
          variant="standard"
          focused
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          sx={{
            bgcolor: "#ffc148",
            marginTop: "2rem",
            marginLeft: "2rem",
          }}
          variant="contained"
          onClick={() => {
            props.SetModal(false);
            props.updateTodo(props.item.id, inputValue);
          }}
        >
          Upate Todo
        </Button>
      </Box>
    </Modal>
  );
}

export default UpdateModal;
