import React from 'react'
import { findDOMNode } from 'react-dom'
import { Global, css } from '@emotion/core'
import reset from '../utils/reset'
import './layout-styles.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import '@reach/skip-nav/styles.css'
import Transition from '../components/transition'

export const globalStyles = css({
  ...reset,
})

const Layout = ({
  location,
  children,
  background = 'transparent',
  noSubscribe,
}) => {
  const footerRef = React.useRef(null)

  const scrollToFooter = () => {
    if (footerRef && footerRef.current) {
      const footer = findDOMNode(footerRef.current)
      footer.scrollIntoView()
    }
  }
  return (
    <>
      <Global styles={globalStyles} />
      <SkipNavLink style={{ zIndex: 2 }} />
      <Header background={background} scrollToFooter={scrollToFooter} />
      <SkipNavContent>
        <Transition location={location}>
          <div
            css={css({
              background: background,
            })}>
            {children}
          </div>
        </Transition>
      </SkipNavContent>
      <Footer noSubscribe={noSubscribe} forwardedRef={footerRef} />
    </>
  )
}

export default Layout
