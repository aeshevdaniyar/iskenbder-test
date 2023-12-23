import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@assets/icons";
import Logo from "@assets/images/Logo.png";
import AppStore from "@assets/images/AppStore.png";
import GooglePlay from "@assets/images/GooglePlay.png";
import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  IconButton,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ReactNode, memo } from "react";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontFamily={"Gilroy-Bold"} fontSize={"20px"} mb={2}>
      {children}
    </Text>
  );
};

export const Footer = memo(() => {
  return (
    <Box
      color={"white"}
      bgGradient="linear(107deg, #3186C3 6.46%, #004F86 68.08%)"
    >
      <Container as={Stack} maxW={"1340"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
          py={2}
        >
          <Stack spacing={6}>
            <Box>
              <Image src={Logo} />
            </Box>
            <Text fontSize={"sm"}>
              Первый отечественный бренд Iskender на рынке сантехники от
              компании ОсОО «Стройдом.кг»
            </Text>
            <Stack direction={"row"} spacing={6}>
              <Image alt="AppStore" src={AppStore} />
              <Image alt="GooglePlay" src={GooglePlay} />
            </Stack>
          </Stack>
          <Stack align={"flex-start"} fontSize={"15px"}>
            <ListHeader>Адреса</ListHeader>
            <Stack spacing={4} fontFamily={"Gilroy-Medium"}>
              <Box>
                <Text color="#E0E0E0">ЭлитСтрой</Text>
                <Text>ул. Ден-Сяопина 18/1</Text>
              </Box>
              <Box>
                <Text color="#E0E0E0">Баткен</Text>
                <Text>ул. Льва-Толстого 19</Text>
              </Box>
              <Box>
                <Text color="#E0E0E0">ТааТан</Text>
                <Text>ул. Лермонтова 6</Text>
              </Box>
            </Stack>
          </Stack>
          <Stack align={"flex-start"} fontFamily={"Gilroy-Medium"}>
            <ListHeader>Компания</ListHeader>
            <Box color={"rgba(255, 255, 255, 0.80)"} as="a" href={"#"}>
              Каталог
            </Box>
            <Box color={"rgba(255, 255, 255, 0.80)"} as="a" href={"#"}>
              Избранное
            </Box>
            <Box color={"rgba(255, 255, 255, 0.80)"} as="a" href={"#"}>
              Личный кабинет
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Контакты</ListHeader>
            <Stack>
              <Box>
                <Text color="#E0E0E0">Email:</Text>
                <Text>iskender.kg@gmail.com</Text>
              </Box>
              <Box>
                <Text color="#E0E0E0">Телефон:</Text>
                <Text>+996 (500) 000-104</Text>
                <Text>+996 (997) 000-104 </Text>
                <Text>+996 (222) 000-104 </Text>
              </Box>
            </Stack>
            <Button
              leftIcon={<WhatsAppIcon />}
              rounded={"full"}
              colorScheme="whatsapp"
            >
              WhatsApp
            </Button>
          </Stack>
        </SimpleGrid>
        <Divider />
        <HStack justifyContent={"space-between"}>
          <Text>© 2023 Iskender.kg - Отечественный бренд сантехники</Text>
          <HStack>
            <IconButton
              aria-label="Instagram"
              bgColor={"transparent"}
              _hover={{
                bgColor: "transparent",
              }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              aria-label="facebook"
              bgColor={"transparent"}
              _hover={{
                bgColor: "transparent",
              }}
            >
              <FacebookIcon />
            </IconButton>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
});
