import { Image } from "@chakra-ui/react";
import bullsEye from "@game-hub/assets/bulls-eye.jpeg";
import meh from "@game-hub/assets/meh.jpeg";
import thumbsUp from "@game-hub/assets/thumbs-up.jpeg";
import type { ComponentProps } from "react";

interface Props {
  rating: number;
}

type ImageProps = ComponentProps<typeof Image>;

const Emoji = ({ rating }: Props) => {
  if (rating > 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} boxSize={"25px"} marginTop={1} />;
};

export default Emoji;
