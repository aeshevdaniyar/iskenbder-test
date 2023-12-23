import { HeartIcon, MinusIcon, PlusIcon } from "@assets/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Image,
  Stack,
  Text,
  useControllableState,
} from "@chakra-ui/react";
import { FC, memo } from "react";

interface ProductCardProps {
  name: string;
  newPrice?: number;
  oldPrice?: number;
  price: number;
  image: string;
  inStock: boolean;
  isSet: boolean;
}
export const ProductCard: FC<ProductCardProps> = memo((props) => {
  const [value, setValue] = useControllableState({ defaultValue: 0 });
  const { image, name, price, newPrice, oldPrice, inStock, isSet } = props;
  return (
    <Card>
      <CardBody p={3} position={"relative"}>
        <Image
          w="full"
          h="full"
          objectFit={"cover"}
          alt={name}
          src={image}
          rounded={"lg"}
        />
        <Stack mt="1" spacing="0">
          <Text fontFamily={"Gilroy-Medium"} fontSize={"14px"}>
            {name}
          </Text>

          {!newPrice && (
            <Text fontFamily={"Gilroy-Bold"} fontSize="19px">
              {price} с
            </Text>
          )}

          {newPrice && (
            <HStack>
              <Text fontFamily={"Gilroy-Bold"} color="#F00" fontSize="19px">
                {price} с
              </Text>
              <Text
                fontFamily={"Gilroy-Bold"}
                color="#808080"
                fontSize="14px"
                textDecorationLine={"line-through"}
              >
                {oldPrice} с
              </Text>
            </HStack>
          )}
          {inStock && (
            <Text
              fontSize={"12px"}
              color={"#73CB5E"}
              fontWeight={"Gilroy-Medium"}
            >
              В наличии
            </Text>
          )}
          {!inStock && (
            <Text
              fontSize={"12px"}
              color={"rgba(0, 0, 0, 0.20)"}
              fontWeight={"Gilroy-Medium"}
            >
              В наличии
            </Text>
          )}

          {isSet && (
            <Text
              fontSize={"12px"}
              color={"#3286C2"}
              fontWeight={"Gilroy-Medium"}
            >
              Комплект
            </Text>
          )}
          {!isSet && (
            <Text
              fontSize={"12px"}
              color={"rgba(0, 0, 0, 0.20)"}
              fontWeight={"Gilroy-Medium"}
            >
              Комплект
            </Text>
          )}
        </Stack>
        <Button
          pos="absolute"
          top={2}
          right={2}
          _hover={{
            fill: "#174261",
          }}
          size={"sm"}
        >
          <HeartIcon boxSize={"24px"} />
        </Button>
      </CardBody>
      <CardFooter p={0}>
        <HStack px={3} py={1} w="full" justifyContent={"space-between"}>
          <Button
            _hover={{
              bgColor: "#3286C3",

              fill: "white",
            }}
            rounded={"full"}
            h={"12"}
            w={"12"}
            onClick={() => setValue(value + 1)}
          >
            <PlusIcon />
          </Button>
          <Box p={2} fontWeight={"Gilroy-Medium"} fontSize={"15px"}>
            {value}
          </Box>
          <Button
            rounded={"full"}
            isDisabled={value == 0}
            onClick={() => setValue(value - 1)}
            h={"12"}
            w={"12"}
            _hover={{
              bgColor: "#3286C3",

              fill: "white",
            }}
          >
            <MinusIcon />
          </Button>
        </HStack>
      </CardFooter>
    </Card>
  );
});
