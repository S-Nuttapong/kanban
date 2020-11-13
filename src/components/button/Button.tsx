import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { CustomDialog } from "../dialog/Dialog";
import { DialogProps } from "../../interface/IDialog";
import { CanCelButton } from "./styles";

export const DeleteButton = ({
  action,
  message,
}: Pick<DialogProps, "action" | "message">) => {
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
        action={action}
        message={message}
      />
    </div>
  );
};

export const CancelButton = ({ action }: Pick<DialogProps, "action">) => {
  const [showDialog, setShowDialog] = useState(false);

  const handleClickOpen = () => {
    setShowDialog(true);
  };

  const handleClose = () => {
    setShowDialog(false);
  };
  return (
    <div className="flex bg-none">
      <CanCelButton type="button" aria-label="cancel" className="ml-3" onClick={handleClickOpen}>Cancel</CanCelButton>
      <CustomDialog
        open={showDialog}
        handleClose={handleClose}
        action={action}
        message="Are you sure? Any progress made will be lost."
      />
    </div>
  );
};
