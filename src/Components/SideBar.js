import { Box, VStack, Link, Image } from "@chakra-ui/react";
import topMenu from "./images/TopMenu.png";
import sideBar from "./images/Techsevvysidebar.png";

function Sidebar() {
  return (
    <Box h="100vh" bg="white" p={4}>
      <VStack align="center" spacing={8}>
        <Link href="#">
          <Image src={sideBar} />{" "}
        </Link>
        <Link href="#">
          <Image src={topMenu} />
        </Link>
      </VStack>
    </Box>
  );
}

export default Sidebar;
