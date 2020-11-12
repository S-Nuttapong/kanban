import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { SnackBarProps } from "../../interface/IAlert";
import { useSetState } from "../../utils/useSetState";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export const Snackbars = ({ open, message, setOpen }: SnackBarProps) => {
  const classes = useStyles();
  const {initState, setInitState} = useSetState(open);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setInitState(false);
    setTimeout(() => {
      setOpen();
    }, 100);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={initState} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};
