import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import { Genre } from "../hook/use-genres";
import "./App.css";
import GameGrid from "./game-grid";
import GenreLists from "./genre-lists";
import Navbar from "./navbar";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
          <GridItem area="aside">
            <GenreLists onSelectGenre={(genre) => setSelectedGenre(genre)} />
          </GridItem>
        </Show>

        <GridItem area="main" bg={"dodgerblue"}>
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
