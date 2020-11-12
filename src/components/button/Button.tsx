import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { CustomDialog } from "../dialog/Dialog";
import { DialogProps } from "../../interface/IDialog";

export const DeleteButton = ({
  onDelete,
  message,
}: Pick<DialogProps, "onDelete" | "message">) => {
  const [showDialog, setShowDialog] = useState(false);

  const handleClickOpen = () => {
    setShowDialog(true);
  };

  const handleClose = () => {
    setShowDialog(false);
  };

  return (
    <div>
      <IconButton aria-label="delete" onClick={handleClickOpen}>
        <DeleteIcon />
      </IconButton>
      <CustomDialog
        open={showDialog}
        handleClose={handleClose}
        onDelete={onDelete}
        message={message}
      />
    </div>
  );
};


