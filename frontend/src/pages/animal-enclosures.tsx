import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { FC, useEffect, useState } from "react";
import { EnclosuresService } from "../services/enclosure-service";
import { AnimalEnclosureList } from "../components";

const AnimalEnclosures: FC = () => {
  useEffect(() => {
    document.title = "Tiere/Gehege zuordnen";
  }, []);

  return (
    <Box>
      <AnimalEnclosureList />
    </Box>
  );
};

export default AnimalEnclosures;
