import React from 'react'
import { graphql } from 'gatsby'
import Link from '../components/link'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '../components/layout'

export default function ResourcesPage() {
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
        <h1>Resources</h1>
        <h2>On Drawing</h2>
        <div>
          <p>
            - Schoolism - Drawing Fundamentals - Pictorial Composition -
            Essentials of Realism - Fundamentals of Lighting - SVSLearn - How to
            Draw Everything - Creative Composition - Concept Design Academy -
            How to Think When You Draw by Lorenzo Etherington - Will Weston -
            How to Draw & How to Render by Scott Robertson - Koos Eissen on
            Sketching - Dynamic Sketching with Peter Han and Patrick - New
            Masters Academy - Composition with Bill Perkins
          </p>
        </div>
        <h2>On Metaphors & Visual Thinking</h2>
        <div>
          <p>
            - Lateral Thinking by Edward de Bono - The Thinking Illustrator by
            Craig Frazier - Metaphors We Live by - Art Synectics - Design
            Synectics - Applied Imagination by Alex Osborn - Thinkertoys
          </p>
        </div>
        <h2>On Programming</h2>
        <div>
          <p>- Egghead ;) - You Don't Know JS - Eloquent JavaScript</p>
        </div>
      </main>
    </Layout>
  )
}
