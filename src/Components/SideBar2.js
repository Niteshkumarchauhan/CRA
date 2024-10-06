import { Box, VStack, Link, Image } from "@chakra-ui/react";
import Menuicon from "./images/Menu&Invite.png";
import dashboard from "./images/logo.png";

function Sidebar2() {
  return (
    <Box h="100vh" bg="white" p={4}>
      <VStack align="center" spacing={8}>
        <Link href="#">
          <Image src={Menuicon} />{" "}
        </Link>
        <Link href="#">
          <Image src={dashboard} />
        </Link>
      </VStack>
    </Box>
  );
}

export default Sidebar2;
