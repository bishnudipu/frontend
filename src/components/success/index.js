import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const styles = {
  position: "absolute",
  top: "-8%",
  right: "-2%",
  cursor: "pointer",
  color: "red",
  bgcolor: "#ffffff",
  borderRadius: "50%",
};
const check = {
  color: "#ffffff",
  bgcolor: "green",
  borderRadius: "50%",
  fontWeight: "10px",
  marginRight: "10px",
};

export default function Success({ open, setOpen }) {
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon sx={styles} onClick={() => setOpen(false)} />
          <Typography id="modal-modal-title" variant="h8" component="h2">
            <CheckIcon sx={check} />
            You have been submitted the details
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
