import { useState } from "react";
import myBackgroundImage from "./images/loginBG.png";
import techSevvy from "./images/Group.png";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Text,
  Checkbox,
  Link,
  Flex,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Image,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Both fields are required");
    } else {
      setError("");
      onLogin(email, password);
    }
  };

  return (
    <Box
      w="100%"
      h="100vh"
      bgImage={`url(${myBackgroundImage})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      height="100vh"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <Image src={techSevvy}  position="absolute" top="30px"/>
      <Box
        bgImage={`url(${myBackgroundImage})`}
        maxW="md"
        mx="auto"
        mt={10}
        p={5}
        borderWidth={1}
        borderRadius="md"
        boxShadow="lg"
        width="550px"
        height="480px"
        background="rgba(255, 255, 255, 1)"
        color="rgba(48, 48, 48, 1)"
      >
        <Heading mb={6}>Welcome Back!</Heading>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <EmailIcon color="gray.400" />
              </InputLeftElement>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <LockIcon color="gray.400" />
              </InputLeftElement>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width="5rem">
                <Link color="pink.500" fontSize="sm" mr={3} href="#">
                  Forgot?
                </Link>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Flex align="center" display="flex" justifyContent="end">
            <Checkbox
              isChecked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            >
              Remember Me
            </Checkbox>
          </Flex>

          {error && <Text color="red.500">{error}</Text>}

          <Button colorScheme="blue" onClick={handleLogin}>
            Sign In
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Login;
