import { Box, Button, ButtonGroup } from "@mui/material";
import { FC, useEffect } from "react";

const HomePage: FC = () => {

  useEffect(() => {
    document.title = 'Zoo';
  }, []);

  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <ButtonGroup variant="outlined">
        <Button href="/animals">Tiere Verwalten</Button>
        <Button href="/enclosures">Gehege Verwalten</Button>
        <Button>Tiere/Gehege zuordnen</Button>
      </ButtonGroup>
    </Box>
  );
};

export default HomePage;
