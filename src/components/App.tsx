import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import { Genre } from "../hook/use-genres";
import "./App.css";
import GameGrid from "./game-grid";
import GenreLists from "./genre-lists";
import Navbar from "./navbar";
import PlatformSelector from "./platform-selector";

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
            <GenreLists
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>

        <GridItem area="main" bg={"dodgerblue"}>
          <PlatformSelector />
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
