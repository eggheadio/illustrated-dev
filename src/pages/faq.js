import React from 'react'
import { css } from '@emotion/core'
import Layout from '../components/layout'

export default function FAQPage() {
  return (
    <Layout
      css={css({
        display: 'grid',
        gridGap: '25px',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr) )',
      })}>
      <main
        css={css({
          margin: '0 auto',
          maxWidth: '500px',
          padding: '50px 10px',
        })}>
        <h1>FAQ</h1>
      </main>
    </Layout>
  )
}
