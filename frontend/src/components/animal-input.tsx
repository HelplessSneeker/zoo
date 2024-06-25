import {
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FC, useEffect, useState } from "react";
import { AnimalsService } from "../services/animals-service";

interface AnimalInputProps {
  name?: string;
  age?: number;
  species?: string;
  sex?: string;
  id?: string;

  onSave?: () => void;
}

const AnimalInput: FC<AnimalInputProps> = (props) => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [species, setSpecies] = useState("");
  const [speciesError, setSpeciesError] = useState(false);
  const [age, setAge] = useState<number>(0);
  const [sex, setSex] = useState("");
  const [sexError, setSexError] = useState(false);

  const animalsService = new AnimalsService();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (props.id) {
      setName(props.name || "");
      setAge(props.age ? +props.age : 0);
      setSpecies(props.species || "");
      setSex(props.sex || "");
    }
  }, [props.id]);

  const mutation = useMutation({
    mutationFn: () =>
      props.id
        ? animalsService.editAnimal({
            id: props.id,
            name,
            species,
            age,
            sex,
          })
        : animalsService.createAnimal({
            name,
            species,
            age,
            sex,
          }),
    onSuccess: () => {
      setName("");
      setSpecies("");
      setAge(0);
      setSex("");
      props.onSave && props.onSave();
      queryClient.invalidateQueries({ queryKey: ["animals"] });
    },
  });

  const onSave = () => {
    if (name === "" || sex === "" || species === "") {
      setNameError(name === "");
      setSpeciesError(species === "");
      setSexError(sex === "");
    } else {
      mutation.mutate();
    }
  };

  return (
    <Stack direction="row" m={2} spacing={2}>
      <TextField
        id="animal-name"
        required
        error={nameError}
        value={name}
        onChange={(e) => {
          setName(e.currentTarget.value);
          setNameError(false);
        }}
        label="Name"
        fullWidth
      />

      <TextField
        id="animal-species"
        required
        error={speciesError}
        value={species}
        onChange={(e) => {
          setSpecies(e.currentTarget.value);
          setSpeciesError(false);
        }}
        label="Art"
        fullWidth
      />

      <TextField
        id="animal-age"
        required
        value={age}
        onChange={(e) => {
          setAge(+e.currentTarget.value);
        }}
        label="Alter"
        type="number"
        fullWidth
      />

      <FormControl fullWidth error={sexError} required>
        <InputLabel id="animal-sex-select-label">Geschlect</InputLabel>
        <Select
          labelId="animal-sex-select-label"
          id="animal-sex-select"
          value={sex}
          onChange={(e) => {
            setSex(e.target.value);
            setSexError(false);
          }}
          label="Geschlecht"
        >
          <MenuItem value="MALE">Männlich</MenuItem>
          <MenuItem value="FEMALE">Weiblich</MenuItem>
        </Select>
      </FormControl>
      <Button fullWidth variant="outlined" color="success" onClick={onSave}>
        Speichern
      </Button>
    </Stack>
  );
};

export default AnimalInput;
