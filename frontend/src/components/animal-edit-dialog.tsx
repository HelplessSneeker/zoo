import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { FC, useEffect, useState } from "react";
import AnimalInput from "./animal-input";

interface AnimalEditDialogProps {
    open: boolean;
    onClose: () => void;
    animal?: {
        id: string,
        name: string,
        species: string,
        age: number,
        sex: string
    }
}

const AnimalEditDialog: FC<AnimalEditDialogProps> = (props) => {
    const [open, setOpen] = useState(props.open);

    useEffect(() => {
        setOpen(props.open);
    }, [props.open])


    return (
        <Dialog maxWidth="lg" open={open} onClose={props.onClose}>
            <DialogTitle>
                Tier Bearbeiten
            </DialogTitle>
            <DialogContent>
                <AnimalInput onSave={props.onClose} {...props.animal} />
            </DialogContent>
        </Dialog>
    )
}

export default AnimalEditDialog;