import DateRangeSelector from "./DateRangeSelector.js";
import fullScreen from "./images/fullscreen.png";
import nightMood from "./images/darkMoon.png";
import AvatarIcon from "./images/userIcon.png";
import LogoutIcon from "./images/logouticon.png";
import vector from "./images/Vector.png";
import {
  Image,
  Box,
  Flex,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  useColorMode,
} from "@chakra-ui/react";

export default function Nav() {

  return (
    <Box px={4} bg="white" height="80px">
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        w="100%"
      >
        <Box fontWeight="bold" fontSize="xl">
          Dashboard
        </Box>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7} alignItems={"center"}>
            <DateRangeSelector />
            <Image src={fullScreen} />
            <Image src={nightMood} />
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <MenuItem>
                  <Image width="12px" height="16px" mr={1} src={AvatarIcon} />
                  <Image src={vector} />
                </MenuItem>
              </MenuButton>
              <MenuList alignItems={"center"}>
                <MenuItem>
                  <Text
                    fontSize="12px"
                    bg="rgba(42, 77, 216, 1)"
                    p={3}
                    borderRadius="45%"
                    color="rgba(255, 255, 255, 1)"
                    mr={3}
                  >
                    N
                  </Text>
                  <MenuItem flexDirection="column" alignItems="start">
                    <Text fontSize="12px" color="black" fontWeight={700}>
                      Naveen
                    </Text>
                    <Text fontSize="12px" color="black">
                      online
                    </Text>
                  </MenuItem>
                </MenuItem>
                <br />
                <MenuDivider />

                <MenuItem onClick={handleLogout}>
                  <Image src={LogoutIcon} mr={3} />
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}

const handleLogout = () => {
  alert("You have been logged out.");
};
