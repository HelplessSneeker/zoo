import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Button,
  Stack,
  Box,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import AnimalAddDialog from "./animal-add-dialog";
import { EnclosuresService } from "../services/enclosure-service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface AnimalEnclosureListProps {
  // enclosures: any[];
}

const AnimalEnclosureList: FC<AnimalEnclosureListProps> = (props) => {
  const enclosureService = new EnclosuresService();
  const queryClient = useQueryClient();

  const [enclosureId, setEnclosureId] = useState("");

  const [enclosures, setEnclosures] = useState([]);

  const query = useQuery({
    queryKey: ["enclosures"],
    queryFn: () => enclosureService.getAllEnclosures(),
  });

  useEffect(() => {
    if (query.data && query.data.length !== undefined) {
      setEnclosures(query.data);
    }
  }, [query]);

  const mutation = useMutation({
    mutationFn: (body: { animalId: string; enclosureId: string }) =>
      enclosureService.removeAnimalFromEnclosure(
        body.enclosureId,
        body.animalId,
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["enclosures"] });
    },
  });

  const onRemoveAnimal = (animalId: string, enclosureId: string) => {
    mutation.mutate({ animalId, enclosureId });
  };

  return (
    <Grid container p={2} spacing={2}>
      {enclosures.map((e: any) => (
        <Grid key={e.id} item xs={3}>
          <Card variant="elevation">
            <CardHeader
              title={
                <>
                  <b>Gehege:</b> {e.name} <b>Ort:</b> {e.place} <b>Größe:</b>{" "}
                  {e.size}m²
                </>
              }
            />
            <CardContent>
              <Button onClick={() => setEnclosureId(e.id)}>Add</Button>
              <Stack
                display="flex"
                height={140}
                sx={{ overflowY: "auto", overflowX: "hidden" }}
              >
                {e.animals.map((a: any) => (
                  <Grid
                    spacing={2}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    container
                  >
                    <Grid item xs={2}>
                      {a.name}
                    </Grid>
                    <Grid item xs={2}>
                      {a.species}
                    </Grid>
                    <Grid item xs={2}>
                      {a.age}
                    </Grid>
                    <Grid item xs={2}>
                      {a.sex === "MALE" ? "Männlich" : "Weiblich"}
                    </Grid>
                    <Grid item xs={2}>
                      <Button
                        sx={{ m: 2 }}
                        variant="outlined"
                        color="error"
                        onClick={() => onRemoveAnimal(a.id, e.id)}
                      >
                        X
                      </Button>
                    </Grid>
                  </Grid>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
      <AnimalAddDialog
        open={enclosureId !== ""}
        onClose={() => setEnclosureId("")}
        enclosureId={enclosureId}
      />
    </Grid>
  );
};

export default AnimalEnclosureList;
