import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { FC, useEffect, useState } from "react";
import EnclosureInput from "./enclosure-input";

interface EnclosureEditDialogProps {
  open: boolean;
  onClose: () => void;
  enclosure?: {
    id: string;
    name: string;
    place: string;
    size: number;
  };
}

const EnclosureEditDialog: FC<EnclosureEditDialogProps> = (props) => {
  const [open, setOpen] = useState(props.open);

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  return (
    <Dialog maxWidth="lg" open={open} onClose={props.onClose}>
      <DialogTitle>Gehege Bearbeiten</DialogTitle>
      <DialogContent>
        <EnclosureInput onSave={props.onClose} {...props.enclosure} />
      </DialogContent>
    </Dialog>
  );
};

export default EnclosureEditDialog;
