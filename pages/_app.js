import Head from "next/head";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import theme from "../utils/theme";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const newTheme = createTheme(theme);
  return (
    <>
      <Head>
        <meta name="author" content="saqib aziz" />
        <meta
          name="description"
          content="Next.js blogs application with firebase and redux"
        />
        <meta
          name="keyword"
          content="saqib, blog, next.js, firebase-blog, redux-toolkit-blog"
        />
      </Head>
      <ThemeProvider theme={newTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
