import { Box } from "@mui/material";
import { FC, useEffect, useState } from "react";
import {
  EnclosureEditDialog,
  EnclosureInput,
  EnclosureTable,
} from "../components";

const EnclosuresPage: FC = () => {
  const [open, setOpen] = useState(false);
  const [enclosure, setEnclosure] = useState();

  useEffect(() => {
    document.title = "Gehege";
  }, []);

  return (
    <Box>
      <EnclosureInput />
      <EnclosureTable
        onEdit={(enclosure) => {
          setEnclosure(enclosure);
          setOpen(true);
        }}
      />
      <EnclosureEditDialog
        enclosure={enclosure}
        open={open}
        onClose={() => {
          setOpen(false);
          setEnclosure(undefined);
        }}
      />
    </Box>
  );
};

export default EnclosuresPage;
