import React from 'react'
import { css } from '@emotion/core'
import Container from '../components/container'
import SEO from '../components/seo'
import { bpMinSM } from '../utils/breakpoints'
import ResourceCard from '../components/resourceCard.js'
import ResourceBook from '../components/resourceBook.js'
import {
  resourceCourses,
  resourceBooks,
} from '../../content/static_content/resourceData'

export default function ResourcesPage() {
  return (
    <>
      <SEO title='Resources' />
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
          Resources
        </h1>
        <hr />
        <h2
          css={css({
            textAlign: 'center',
          })}>
          Learning Platforms & Courses
        </h2>
        <div
          css={css({
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr) )',
            alignItems: 'center',
          })}>
          {resourceCourses.map((d, i) => {
            console.log(d.recCourses)
            return (
              <ResourceCard
                key={i}
                title={d.title}
                description={d.description}
                img={d.img}
                cost={d.cost}
                url={d.url}
                recCourses={d.recCourses}
              />
            )
          })}
        </div>
        <hr />

        <h2
          css={css({
            textAlign: 'center',
          })}>
          Books
        </h2>
        <div
          css={css({
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr) )',
          })}>
          {resourceBooks.map((d, i) => {
            return (
              <ResourceBook
                key={i}
                title={d.title}
                description={d.description}
                img={d.img}
                url={d.url}
                author={d.author}
              />
            )
          })}
        </div>
      </Container>
    </>
  )
}
