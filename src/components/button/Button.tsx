import React, { useState, ReactElement } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { CustomDialog } from "../dialog/Dialog";
import { DialogProps } from "../../interface/IDialog";
import { CanCelButton } from "./styles";

interface DialogButtonProps extends Pick<DialogProps, "action" | "message"> {
  children(handleClickOpen: () => void): ReactElement;
}

const DialogButton = ({ action, message, children }: DialogButtonProps) => {
  const [showDialog, setShowDialog] = useState(false);

  const handleClickOpen = () => {
    setShowDialog(true);
  };

  const handleClose = () => {
    setShowDialog(false);
  };

  return (
    <React.Fragment>
      {children && children(handleClickOpen)}
      <CustomDialog
        open={showDialog}
        handleClose={handleClose}
        action={action}
        message={message}
      />
    </React.Fragment>
  );
};

export const DeleteButton = ({
  action,
  message,
}: Pick<DialogProps, "action" | "message">) => (
  <div>
    <DialogButton action={action} message={message}>
      {(handleClickOpen) => (
        <IconButton aria-label="delete" onClick={handleClickOpen}>
          <DeleteIcon />
        </IconButton>
      )}
    </DialogButton>
  </div>
);

export const CancelButton = ({ action }: Pick<DialogProps, "action">) => (
  <div className="flex bg-none">
    <DialogButton
      action={action}
      message={"Are you sure? Any progress made will be lost."}
    >
      {(handleClickOpen) => (
        <CanCelButton
          type="button"
          aria-label="cancel"
          className="ml-3"
          onClick={handleClickOpen}
        >
          Cancel
        </CanCelButton>
      )}
    </DialogButton>
  </div>
);
