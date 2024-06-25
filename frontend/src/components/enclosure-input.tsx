import { Button, Stack, TextField } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { EnclosuresService } from "../services/enclosure-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface EnclosureInputProps {
  name?: string;
  size?: number;
  place?: string;
  id?: string;

  onSave?: () => void;
}

const EnclosureInput: FC<EnclosureInputProps> = (props) => {
  const enclosuresService = new EnclosuresService();
  const queryClient = useQueryClient();

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [place, setPlace] = useState("");
  const [placeError, setPlaceError] = useState(false);
  const [size, setSize] = useState(0);

  const mutation = useMutation({
    mutationFn: () =>
      props.id
        ? enclosuresService.editEnclosure({
            id: props.id,
            name,
            place,
            size,
          })
        : enclosuresService.createEnclosure({
            name,
            place,
            size,
          }),
    onSuccess: () => {
      setName("");
      setPlace("");
      setSize(0);
      props.onSave && props.onSave();
      queryClient.invalidateQueries({ queryKey: ["enclosures"] });
    },
  });

  useEffect(() => {
    if (props.id) {
      setName(props.name || "");
      setPlace(props.place || "");
      setSize(props.size ? +props.size : 0);
    }
  }, [props.id]);

  const onSave = () => {
    if (name === "" || place === "") {
      setNameError(name === "");
      setPlaceError(place === "");
    } else {
      mutation.mutate();
    }
  };

  return (
    <Stack direction="row" m={2} spacing={2}>
      <TextField
        id="enclosure-name"
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
        id="enclosure-place"
        required
        error={placeError}
        value={place}
        onChange={(e) => {
          setPlace(e.currentTarget.value);
          setPlaceError(false);
        }}
        label="Ort"
        fullWidth
      />
      <TextField
        id="enclosure-size"
        required
        value={size}
        onChange={(e) => {
          setSize(+e.currentTarget.value);
        }}
        label="Größe m²"
        type="number"
        fullWidth
      />
      <Button fullWidth variant="outlined" color="success" onClick={onSave}>
        Speichern
      </Button>
    </Stack>
  );
};

export default EnclosureInput;
