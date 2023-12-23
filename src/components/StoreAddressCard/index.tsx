import {
  ChevronRihgt,
  ClockIcon,
  LocationIcon,
  PhoneIcon,
} from "@assets/icons";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";

interface StoreAddressCardProps {
  avatar: string;
  address: string;
  date: {
    checkIn: string;
    checkOut: string;
  };
  phoneNumber: string;
  name: string;
}

export const StoreAddressCard: FC<StoreAddressCardProps> = (props) => {
  const { address, avatar, date, phoneNumber, name } = props;
  return (
    <Card rounded={"lg"} bgColor={"white"}>
      <CardHeader p={2}>
        <HStack alignItems={"flex-end"} justifyContent={"space-between"}>
          <HStack>
            <Avatar width={"42px"} height={"42px"} name={name} src={avatar} />
            <Box>
              <Text fontFamily={"Gilroy-Medium"} fontSize={"18px"}>
                {name}
              </Text>
              <Button variant={"link"} color="#0062D5">
                открыть в карте
              </Button>
            </Box>
          </HStack>
          <IconButton aria-label="right arrow" bgColor={"transparent"}>
            <ChevronRihgt />
          </IconButton>
        </HStack>
        <Divider mt={2} />
      </CardHeader>

      <CardBody p={2}>
        <HStack maxW="200px">
          <LocationIcon />
          <Text>{address}</Text>
        </HStack>
      </CardBody>
      <CardFooter p={2}>
        <HStack justifyContent={"space-between"} w="full">
          <HStack>
            <ClockIcon />
            <Text>
              {date.checkIn} - {date.checkOut}
            </Text>
          </HStack>
          <HStack>
            <PhoneIcon />
            <Text>{phoneNumber}</Text>
          </HStack>
        </HStack>
      </CardFooter>
    </Card>
  );
};
