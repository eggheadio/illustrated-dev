import React from 'react'
import Container from '../components/container'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Container>
    <main
      css={{
        margin: '100px',
        fontFamily: 'ff-tisa-web-pro',
      }}>
      <SEO title='404: Not found' />
      <h1>NOT FOUND</h1>
      <p>Well something's definitely broken here...</p>
    </main>
  </Container>
)

export default NotFoundPage
