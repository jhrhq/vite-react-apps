import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
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
  sortOrder: string;
  searchText?: string;
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
        <GridItem area="nav">
          <Navbar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
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
          <Flex paddingLeft={2} marginBottom={5} gap={2}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Flex>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
