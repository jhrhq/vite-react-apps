import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import Navbar from "./navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" " main" `,
          lg: `"nav nav" "aside main" `,
        }}
      >
        <GridItem area="nav" bg={"coral"}>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg={"gold"}>
            Aside
          </GridItem>
        </Show>

        <GridItem area="main" bg={"dodgerblue"}>
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
