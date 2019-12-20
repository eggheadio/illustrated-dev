import React from 'react'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'
import { bpMinSM, bpMinMD } from '../utils/breakpoints'
import FAQ from '../../content/static_content/faq.mdx'
import SEO from '../components/seo'
import Container from '../components/container'

export default function FAQPage() {
  // const FAQPage = () => {
  //   const data = useStaticQuery(graphql`
  //     query AboutPageQuery {
  //       profilePic: file(relativePath: { eq: "maggie.png" }) {
  //         childImageSharp {
  //           fluid(maxWidth: 330) {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   `)
  // }

  return (
    <>
      <SEO title='FAQ' />
      <Layout>
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
              borderRadius: '2px',
              boxShadow: '0px 1px 2px rgba(52, 61, 68, 0.1)',
              clear: 'both',
              margin: '0 auto',
              h3: { fontWeight: '500', marginTop: '2em' },
            })}>
            <div
              css={css({
                maxWidth: '660px',
                margin: '0 auto',
              })}>
              <FAQ />
            </div>
          </main>
        </Container>
      </Layout>
    </>
  )
}
