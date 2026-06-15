import { Card, HStack, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hook/use-games"
import getCroppedImageUrl from "../services/image-urls"
import CriticScore from "./critic-score"
import Emoji from "./emoji"
import PlatformIconList from "./platform-icon-list"

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <Card.Body>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading size="2xl">
          {game.name} <Emoji rating={game.rating_top} />
        </Heading>
      </Card.Body>
    </Card.Root>
  )
}

export default GameCard