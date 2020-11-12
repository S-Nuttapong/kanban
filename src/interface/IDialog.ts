export interface DialogProps {
    open: boolean;
    handleClose: () => void;
    onDelete: () => void;
    message: string;
  }
  