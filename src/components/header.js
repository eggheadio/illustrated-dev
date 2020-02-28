import React from 'react'
import Link from './link'
import Subbutton from './subbutton'
import { css } from '@emotion/core'
import Container from './container'
import { bpMinMD, bpMinSM, bpMaxMD } from '../utils/breakpoints'
import VisuallyHidden from '@reach/visually-hidden'
import Hamburger from './hamburger'
import logo from '../images/id_logo.svg'

const Header = ({ background, scrollToFooter }) => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const toggleMenu = () => setMenuOpen(value => !value)
  return (
    <header
      css={css({
        background: background,
        [bpMinSM]: {
          paddingTop: '20px',
        },
        paddingTop: '10px',
        a: {
          fontFamily: 'brandon-grotesque, sans-serif',
          fontSize: '14px',
          letterSpacing: '0.1em',
          fontWeight: '700',
          textTransform: 'uppercase',
          margin: 0,
        },
      })}>
      <Container
        noVerticalPadding
        css={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        })}>
        <Link to='/'>
          <img src={logo} alt='Illustrated.dev logo' />
        </Link>

        {/* Nav Grid Layout */}
        <button
          onClick={toggleMenu}
          aria-haspopup='true'
          aria-expanded={menuOpen}
          css={css({
            padding: 0,
            width: 50,
            height: 50,
            opacity: '.8',
            background: 'none',
            border: 'none',
            [bpMinMD]: { display: 'none' },
            [bpMaxMD]: { display: 'block' },
          })}>
          <div aria-hidden='true'>
            <Hamburger />
          </div>
          <VisuallyHidden>Toggle Nav</VisuallyHidden>
        </button>
        <div
          css={css({
            display: 'none',
            [bpMinMD]: { display: 'block' },
          })}>
          <NavLinks scrollToFooter={scrollToFooter} />
        </div>
      </Container>
      {menuOpen && (
        <Container
          css={css({
            [bpMinMD]: { display: 'none' },
            [bpMaxMD]: { display: 'block' },
          })}>
          <NavLinks scrollToFooter={scrollToFooter} focusFirstLink />
        </Container>
      )}
    </header>
  )
}

const NavLinks = ({ scrollToFooter = () => {}, focusFirstLink = false }) => {
  const linkStyle = css({
    float: 'right',
    boxSizing: 'border-box',
    borderRadius: '4px',
    color: '#62749C',
    [bpMinMD]: {
      padding: '15px 20px',
      display: 'block',
    },
    padding: '0px',
    fontWeight: '700',
  })

  const firstNavRef = React.useRef(null)
  React.useEffect(() => {
    if (focusFirstLink) {
      firstNavRef.current.focus()
    }
  }, [focusFirstLink])

  return (
    <div
      css={css({
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      })}>
      <Link to='/about' innerRef={firstNavRef} css={linkStyle}>
        About
      </Link>
      <Link to='/resources' css={linkStyle}>
        Resources
      </Link>
      <Link to='/faq' css={linkStyle}>
        FAQ
      </Link>
      <Subbutton
        css={css({
          [bpMinMD]: { display: 'block' },
          [bpMaxMD]: { display: 'none' },
        })}
        onClick={scrollToFooter}
      />
    </div>
  )
}

export default Header
