import React from 'react'
import { css } from '@emotion/core'
// import { useStaticQuery, graphql } from 'gatsby'
import { bpMinSM } from '../utils/breakpoints'
import FAQ from '../../content/static_content/faq.mdx'
import SEO from '../components/seo'
import Container from '../components/container'

export default function FAQPage() {
  return (
    <>
      <SEO title='FAQ' />
      <Container>
        <h1
          css={css({
            [bpMinSM]: {
              fontSize: '3.4rem',
            },
            textAlign: 'center',
            marginBottom: '40px',
            fontFamily: 'ff-tisa-web-pro, serif',
          })}>
          FAQ
        </h1>
        <hr />
        <main
          css={css({
            background: 'white',
            padding: '30px 60px',
            clear: 'both',
            margin: '0 auto',
            h3: { fontWeight: '500', marginTop: '2em' },
          })}>
          <div
            css={css({
              margin: '0 auto',
              maxWidth: '680px',
            })}>
            <FAQ />
          </div>
        </main>
      </Container>
    </>
  )
}
