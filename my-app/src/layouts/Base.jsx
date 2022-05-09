import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import siteConfig from "../site.config";

const Base = ({ children }) => {
  return (
    <>
      <Nav />
      <Helmet>
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:url" content={siteConfig.siteUrl} />
        <meta property="og:type" content={siteConfig.openGraph.type} />
        <meta
          property="og:image"
          content={siteConfig.openGraph.images[0].url}
        />
        <meta
          property="og:image:alt"
          content={siteConfig.openGraph.images[0].alt}
        />
        <meta
          property="og:image:width"
          content={siteConfig.openGraph.images[0].width}
        />
        <meta
          property="og:image:height"
          content={siteConfig.openGraph.images[0].height}
        />
        <meta property="og:locale" content={siteConfig.openGraph.locale} />
      </Helmet>
      {children}
      <Footer />
    </>
  );
};

export default Base;
