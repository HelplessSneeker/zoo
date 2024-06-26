import { Box } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { AnimalEditDialog, AnimalInput, AnimalTable } from "../components";

const AnimalsPage: FC = () => {
  const [open, setOpen] = useState(false);
  const [animal, setAnimal] = useState();

  useEffect(() => {
    document.title = "Tiere";
  }, []);

  return (
    <Box>
      <AnimalInput />
      <AnimalTable
        onEdit={(animal) => {
          setAnimal(animal);
          setOpen(true);
        }}
      />
      <AnimalEditDialog
        animal={animal}
        open={open}
        onClose={() => {
          setOpen(false);
          setAnimal(undefined);
        }}
      />
    </Box>
  );
};

export default AnimalsPage;
