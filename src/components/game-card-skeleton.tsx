import { Card, Skeleton } from "@chakra-ui/react"

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="200px" />
      <Card.Body>
        <Skeleton height="4" width="80%" mb="2" />
        <Skeleton height="4" width="100%" mb="2" />
        <Skeleton height="4" width="60%" />
      </Card.Body>
    </Card.Root>
  )
}

export default GameCardSkeleton