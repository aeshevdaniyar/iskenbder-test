import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

const theme = extendTheme({
  fonts: {
    heading: `'Gilroy-Bold', sans-serif`,
    body: `'Gilroy-Regular', sans-serif`,
  },
});

export const Theme: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
