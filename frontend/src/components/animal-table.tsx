import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { FC, useEffect, useState } from "react";
import { AnimalsService } from "../services/animals-service";

interface AnimalTableProps {
  onEdit: (animal: any) => void;
}

const AnimalTable: FC<AnimalTableProps> = (props) => {
  const animalsService = new AnimalsService();

  const [animals, setAnimals] = useState([]);

  const query = useQuery({
    queryKey: ["animals"],
    queryFn: () => animalsService.getAllAnimals(),
  });

  useEffect(() => {
    if (query.data) {
      setAnimals(query.data);
    }
  }, [query]);

  return (
    <Box m={2}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Art</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Alter</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Geschlecht</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {animals.map((row: any) => (
              <TableRow>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.species}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>
                  {row.sex === "MALE" ? "Männlich" : "Weiblich"}
                </TableCell>
                <TableCell>
                  <Button onClick={() => props.onEdit(row)} variant="outlined" fullWidth>
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AnimalTable;
