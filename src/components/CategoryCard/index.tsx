import { Box, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

interface CategoryCardProps {
  title: string;
  count: number;
  image: string;
}

export const CategoryCard: FC<CategoryCardProps> = (props) => {
  const { count, title, image } = props;
  return (
    <Box
      p={3}
      w="full"
      bgColor={"white"}
      rounded={"lg"}
      h={"170px"}
      pos="relative"
      cursor={"pointer"}
      _hover={{
        boxShadow: "lg",
      }}
    >
      <Text fontSize={"14px"} fontFamily={"Gilroy-Medium"}>
        {title}
      </Text>
      <Text fontSize={"12px"} color={"#727272"}>
        {count} товаров
      </Text>
      <Image alt={title} src={image} pos="absolute" right={0} bottom={0} />
    </Box>
  );
};
