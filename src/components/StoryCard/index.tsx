import { Image, Stack, Text } from "@chakra-ui/react";
import { FC, memo } from "react";
interface StoryCardProps {
  image: string;
  title: string;
}
export const StoryCard: FC<StoryCardProps> = memo((props) => {
  const { image, title } = props;

  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Image
        alt={title}
        src={image}
        rounded={"full"}
        border={"1.5px solid"}
        borderColor={"#5C5C5C"}
        w={"60px"}
        h={"60px"}
        objectFit={"cover"}
      />
      <Text>{title}</Text>
    </Stack>
  );
});
