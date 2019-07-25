import React from 'react'
import {findDOMNode} from 'react-dom'
import {Global, css} from '@emotion/core'
import reset from '../utils/reset'
import './layout-styles.css'
import Header from './header'
import Footer from './footer'
import {SkipNavLink, SkipNavContent} from '@reach/skip-nav'
import '@reach/skip-nav/styles.css'

export const globalStyles = css({
  ...reset,
})

const Layout = ({children, background = 'transparent', noSubscribe}) => {
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
      <SkipNavLink style={{zIndex: 2}} />
      <Header background={background} scrollToFooter={scrollToFooter} />
      <SkipNavContent>
        <div
          css={css({
            background: background,
          })}
        >
          {children}
        </div>
      </SkipNavContent>
      <Footer noSubscribe={noSubscribe} forwardedRef={footerRef} />
    </>
  )
}

export default Layout
