import { Header } from "../Header/Header";
import Head from "next/head";

export const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        {title ? <title>{title}</title> : <title>NextTourism - Home</title>}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
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
