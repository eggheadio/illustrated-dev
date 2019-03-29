import React from "react";
import PageTransition from "gatsby-plugin-page-transitions";
import { findDOMNode } from "react-dom";
import { useStaticQuery, graphql } from "gatsby";
import { Global, css } from "@emotion/core";
import { bpMinSM } from "../utils/breakpoints";
import reset from "../utils/reset";
import "./layout-styles.css";
import { bpMaxSM } from "../utils/breakpoints";
import Header from "./header";
import Footer from "./footer";

export const globalStyles = css({
  ...reset
});

const Layout = ({ children, background = "transparent", noSubscribe }) => {
  const footerRef = React.useRef(null);

  const scrollToFooter = () => {
    if (footerRef && footerRef.current) {
      const footer = findDOMNode(footerRef.current);
      footer.scrollIntoView();
    }
  };
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      <PageTransition
        transitionTime={800}
      >
        <Global styles={globalStyles} />
        <Header background={background} scrollToFooter={scrollToFooter} />
        <div
          css={css({
            background: background
          })}
        >
          {children}
        </div>
        <Footer noSubscribe={noSubscribe} forwardedRef={footerRef} />
      </PageTransition>
    </>
  );
};

export default Layout;
