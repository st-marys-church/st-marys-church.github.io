import Head from "next/head";

import { getSiteMetaData } from "@utils/helpers";
import { TypographyStyle, GoogleFont } from 'react-typography'
// Best practice is to have a typography module
// where you define your theme.
// set the typography theme
import Typography from "typography"
import funstonTheme from "typography-theme-funston"
const typography = new Typography(funstonTheme)
import 'bootstrap/dist/css/bootstrap.min.css';
typography.injectStyles();

export function SEO({ title, description = "" }) {
  const siteMetadata = getSiteMetaData();

  const metaDescription = description || siteMetadata.description;

  return (
    <Head>
      <title>
        {title} | {siteMetadata.title}
      </title>
      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={metaDescription}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:creator" content={siteMetadata.social.twitter} />
      <link rel="icon" type="image/png" href="/static/favicon.ico" />
      <link rel="apple-touch-icon" href="/static/favicon.ico" />
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
    </Head>
  );
}
