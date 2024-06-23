import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { FC, useState } from "react";
import { AnimalEditDialog, AnimalInput, AnimalTable } from "../components";

const AnimalsPage: FC = () => {

  const [open, setOpen] = useState(false);
  const [animal, setAnimal] = useState();

  return (
    <Box>
      <AnimalInput />
      <AnimalTable onEdit={(animal) => {
        setAnimal(animal);
        setOpen(true)
      }} />
      <AnimalEditDialog animal={animal} open={open} onClose={() => {
        setOpen(false)
        setAnimal(undefined)
        }} />
    </Box>
  );
};

export default AnimalsPage;