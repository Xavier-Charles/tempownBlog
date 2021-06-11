import Head from "next/head";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "../lib/constants";

export default function Meta() {
  return (
    <Head>
      <title>TempOwn | Own anything temporarily</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/logo192png" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/logo192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/logo192.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/favicon.ico" color="#000000" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`Tempown Blog | Learn how we are building a fully insured 
        peer-to-peer rental marketplace for essential items and equipment.`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} key="ogImage" />
    </Head>
  );
}
