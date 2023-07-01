import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import { Platform } from "../hook/use-games";
import { Genre } from "../hook/use-genres";
import "./App.css";
import GameGrid from "./game-grid";
import GenreLists from "./genre-lists";
import Navbar from "./navbar";
import PlatformSelector from "./platform-selector";
import SortSelector from "./sort-selector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>

        <GridItem area="main">
          <HStack spacing={5} paddingLeft={2} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
