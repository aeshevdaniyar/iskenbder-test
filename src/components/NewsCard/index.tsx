import NewsBunner from "@assets/images/banner.png";
import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import { FC, memo } from "react";
interface NewsCardProps {
  discount: number;
  description: string;
}
export const NewsCard: FC<NewsCardProps> = memo((props) => {
  const { description, discount } = props;
  return (
    <Box h={"180px"} bgImage={NewsBunner}>
      <HStack h="full" alignItems={"center"}>
        <Stack ml={"22px"}>
          <Text fontFamily={"Gilroy-Bold"} fontSize={"24px"}>
            -{discount}%
          </Text>
          <Text>{description}</Text>
          <Button
            bgColor="#0063A9"
            _hover={{
              bgColor: "#0063A9",
            }}
            color={"white"}
            rounded={"2xl"}
          >
            Подробнее
          </Button>
        </Stack>
      </HStack>
    </Box>
  );
});
