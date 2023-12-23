import { Fonts } from "@assets/fonts";
import { FC, PropsWithChildren } from "react";

export const Font: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <>
      <Fonts />
      {children}
    </>
  );
};
