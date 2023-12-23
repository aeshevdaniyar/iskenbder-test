import { Box, HStack, Heading } from "@chakra-ui/react";
import { FC, PropsWithChildren, ReactNode, memo } from "react";
interface SectionProps {
  title: string;
  rightSide?: ReactNode;
}
export const Section: FC<PropsWithChildren<SectionProps>> = memo((props) => {
  const { children, title, rightSide } = props;

  return (
    <Box w="full">
      <HStack justifyContent={"space-between"}>
        <Heading mb={2}>{title}</Heading>
        {rightSide}
      </HStack>

      {children}
    </Box>
  );
});
