import {
  Autocomplete,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FC, useEffect, useState } from "react";
import { AnimalsService } from "../services/animals-service";
import { EnclosuresService } from "../services/enclosure-service";

interface AnimalAddDialogProps {
  open: boolean;
  onClose: () => void;
  enclosureId: string;
}

const AnimalAddDialog: FC<AnimalAddDialogProps> = (props) => {
  const animalsService = new AnimalsService();
  const enclosureService = new EnclosuresService();
  const queryClient = useQueryClient();

  const [availableAnimals, setAvailableAnimals] = useState([]);

  const query = useQuery({
    queryKey: ["availableAnimals", props.open],
    queryFn: () => animalsService.getAvailableAnimals(),
  });

  const mutation = useMutation({
    mutationFn: (animalId: string) =>
      enclosureService.addAnimalToEnclosure(props.enclosureId, animalId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["enclosures"] });
      props.onClose();
    },
  });

  useEffect(() => {
    if (query.data && query.data.length !== undefined) {
      setAvailableAnimals(query.data);
    }
  }, [query]);

  const onSelectAnimal = (animalId: string) => {
    mutation.mutate(animalId);
  };

  return (
    <Dialog fullWidth maxWidth="lg" open={props.open} onClose={props.onClose}>
      <DialogTitle>Tier Hinzufügen</DialogTitle>
      <DialogContent>
        <Autocomplete
          sx={{ mt: 1 }}
          fullWidth
          id="animals-auto-complete"
          isOptionEqualToValue={(o, v) => o.id === v.id}
          options={availableAnimals.map((a: any) => {
            return { ...a, label: a.name };
          })}
          onChange={(e, v) => onSelectAnimal(v.id)}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
      </DialogContent>
    </Dialog>
  );
};

export default AnimalAddDialog;
