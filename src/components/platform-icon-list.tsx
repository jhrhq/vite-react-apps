import { HStack } from "@chakra-ui/react"
import { IconType } from "react-icons"
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs"
import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md"
import { Platform } from "../hook/use-games"

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  }

  return (
    <HStack marginY={1} gap={2}>
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.slug]
        
        // If the slug doesn't match anything in the map, return null safely
        if (!IconComponent) return null

        return (
          <span key={platform.id} style={{ color: "var(--chakra-colors-gray-500)" }}>
            <IconComponent size={18} />
          </span>
        )
      })}
    </HStack>
  )
}

export default PlatformIconList