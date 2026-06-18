import { Button, Menu, MenuPositioner, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hook/use-games";
import usePlatforms from "../hook/use-platform";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">
          {selectedPlatform?.name || "Platforms"}
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <MenuPositioner>
          <Menu.Content>
            {data.map((platform) => (
              <Menu.Item
                key={platform.id}
                value={platform.id.toString()}
                onClick={() => onSelectPlatform(platform)}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </MenuPositioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
