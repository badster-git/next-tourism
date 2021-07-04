import Header from "../Header/Header";
import MobileHeader from "../MobileHeader/MobileHeader";
import { Footer } from "../Footer/Footer";
import { IndexTop } from "../IndexTop/IndexTop";
import Head from "next/head";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
export const Layout = ({ children, title }) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.up(991));
  return (
    <>
      <Head>
        {title ? <title>{title}</title> : <title>NextTourism - Home</title>}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {matchesSM ? <Header /> : <MobileHeader />}
      <main>{children}</main>
      <Footer />
      <style jsx global>
        {`
          html,
          body {
            overflow-x: hidden;
            padding: 0 !important;
          }
          #__next {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          main {
            flex: 1;
          }
        `}
      </style>
    </>
  );
};
