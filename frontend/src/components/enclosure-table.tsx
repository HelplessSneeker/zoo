import {
  Box,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { FC, useState, useEffect } from "react";
import { EnclosuresService } from "../services/enclosure-service";

interface EnclosureTableProps {
  onEdit: (enclosure: any) => void;
}

const EnclosureTable: FC<EnclosureTableProps> = (props) => {
  const enclosuresService = new EnclosuresService();

  const [enclosures, setEnclosures] = useState([]);

  const query = useQuery({
    queryKey: ["enclosures"],
    queryFn: () => enclosuresService.getAllEnclosures(),
  });

  useEffect(() => {
    if (query.data && query.data.length !== undefined) {
      setEnclosures(query.data);
    }
  }, [query]);

  return (
    <Box m={2}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Ort</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Größe</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {enclosures.map((row: any) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.place}</TableCell>
                <TableCell>{row.size}m²</TableCell>
                <TableCell>
                  <Button
                    onClick={() => props.onEdit(row)}
                    variant="outlined"
                    fullWidth
                  >
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

export default EnclosureTable;
