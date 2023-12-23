import { Global } from "@emotion/react";
import GilroyBold from "./Gilroy-Bold.ttf";
import GilroySemiBold from "./Gilroy-SemiBold.ttf";
import GilroyMedium from "./Gilroy-Medium.ttf";
import GilroyRegular from "./Gilroy-Regular.ttf";

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Gilroy-SemiBold';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('${GilroySemiBold}');
      }
   
      @font-face {
        font-family: 'Gilroy-Medium';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('${GilroyMedium}') ;
      }

      @font-face {
        font-family: 'Gilroy-Bold';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('${GilroyBold}') ;
      }
      @font-face {
        font-family: 'Gilroy-Regular';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('${GilroyRegular}') ;
      }
      `}
  />
);
