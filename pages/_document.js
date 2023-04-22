import TwSizeIndicator from "@components/TwSizeIndicator";
import config from "@config/config.json";
import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    // destructuring items from config object
    const { favicon } = config.site;
    return (
      <Html lang="en">
        <Head>
          {/* favicon */}
          <link rel="shortcut icon" href={favicon} />
          {/* theme meta */}
          <meta name="theme-name" content="andromeda-light-nextjs" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content="#fff"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content="#000"
          />
        </Head>
        <body>
          <Main />
          <TwSizeIndicator />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
