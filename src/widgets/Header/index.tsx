import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import Logo from "@assets/images/Logo.png";
import { CartIcon, HamburgerIcon, SearchIcon } from "@assets/icons";
export const Header = () => {
  return (
    <Box as="header" bgColor={"#2D82BE"} h={"70px"}>
      <Container maxW={"1340px"} h="full">
        <HStack
          h="full"
          w="full"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <Image src={Logo} />
          </Box>

          <HStack justifyContent={"center"} alignItems={"center"} w="full">
            <Button
              bgColor={"rgba(0, 0, 0, 0.10)"}
              rounded={"full"}
              leftIcon={<HamburgerIcon />}
              _hover={{
                bgColor: "rgba(0, 0, 0, 0.10)",
              }}
              color={"white"}
            >
              Каталог
            </Button>
            <InputGroup maxW="625px">
              <InputLeftElement>
                <SearchIcon />
              </InputLeftElement>
              <Input
                bgColor={"white"}
                rounded={"full"}
                w="full"
                placeholder="Поиск"
              />
              <InputRightElement pr={5}>
                <Text>42903</Text>
              </InputRightElement>
            </InputGroup>
          </HStack>

          <HStack w={"300px"}>
            <Box>
              <Text color={"white"} fontSize={"10px"}>
                Добро пожаловать
              </Text>
              <Text
                fontFamily={"Gilroy-SemiBold"}
                color={"white"}
                fontSize={"14px"}
              >
                Вход/Регистрация
              </Text>
            </Box>
            <Avatar h={"30px"} w={"30px"} />
            <Divider orientation="vertical" h={"30px"} />
            <Box pos="relative">
              <IconButton isRound h={"30px"} minW={"30px"} aria-label="cart">
                <CartIcon />
              </IconButton>
              <Flex
                rounded={"full"}
                px={"7px"}
                py={"2px"}
                top={"-10px"}
                right={"-10px"}
                pos="absolute"
                bgColor={"#DC3434"}
                color={"white"}
              >
                <Text fontSize={"10px"}>3</Text>
              </Flex>
            </Box>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};
