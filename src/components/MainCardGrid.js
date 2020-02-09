import React from 'react'
import { css } from '@emotion/core'
import get from 'lodash/get'
import includes from 'lodash/includes'
import isEmpty from 'lodash/isEmpty'
import { bpMinSM, bpBtnFlexSM, bpBtnFlexMD } from '../utils/breakpoints'
import Link from './link'
import Card from './card'

const ALL_CATEGORY = 'all'

const categoryOrder = {
  explainers: 1,
  illustratednotes: 2,
  meta: 3,
}

const MainCardGrid = ({ posts }) => {
  const categories = posts.reduce((currentCategories, nextPost) => {
    const newCategory = get(nextPost, 'node.frontmatter.category')
    if (isEmpty(newCategory)) {
      return currentCategories
    }
    if (!includes(currentCategories, newCategory)) {
      currentCategories.push(newCategory)
      currentCategories.sort((c1, c2) => {
        const c1Order = categoryOrder[c1] || 10
        const c2Order = categoryOrder[c2] || 10
        return c1Order - c2Order
      })
    }
    return currentCategories
  }, [])

  const [currentCategory, setCurrentCategory] = React.useState(ALL_CATEGORY)
  const handleCategoryClick = category => {
    if (category === currentCategory) {
      setCurrentCategory(ALL_CATEGORY)
    } else {
      setCurrentCategory(category)
    }
  }
  return (
    <div>
      <div
        css={css({
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center',
          [bpBtnFlexMD]: { marginBottom: '10px' },
        })}>
        <p>Illustrated Explainers & Notes</p>
        <span
          css={css({
            justifySelf: 'end',
            [bpBtnFlexMD]: {
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            },
          })}>
          <button
            css={css({
              alignSelf: 'end',
              padding: '8px 20px',
              margin: '4px',
              border: 'none',
              background: currentCategory === ALL_CATEGORY ? '#A1B7CB' : '#fff',
              borderRadius: '24px',
              fontFamily: 'brandon-grotesque, sans-serif',
              fontSize: '14px',
              letterSpacing: '0.1em',
              fontWeight: '700',
              textTransform: 'uppercase',
              color: currentCategory === ALL_CATEGORY ? '#fff' : '#6284A3',
              transition: 'all 0.5s ease',
              ':hover': {
                background: '#20B5D5',
                color: '#fff',
              },
              [bpBtnFlexMD]: {
                alignSelf: 'flex-end',
                width: '80%',
              },
              [bpBtnFlexSM]: {
                alignSelf: 'stretch',
                width: '100%',
              },
            })}
            key={ALL_CATEGORY}
            onClick={() => handleCategoryClick(ALL_CATEGORY)}>
            All Posts
          </button>
          {categories.map(c => {
            return (
              <button
                css={css({
                  alignSelf: 'end',
                  padding: '8px 20px',
                  margin: '4px',
                  border: 'none',
                  background: currentCategory === c ? '#20B5D5' : '#fff',
                  borderRadius: '24px',
                  fontFamily: 'brandon-grotesque, sans-serif',
                  fontSize: '14px',
                  letterSpacing: '0.1em',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: currentCategory === c ? '#fff' : '#6284A3',
                  transition: 'all 0.5s ease',
                  ':hover': {
                    background: '#20B5D5',
                    color: '#fff',
                  },
                  [bpBtnFlexMD]: {
                    alignSelf: 'flex-end',
                    width: '80%',
                  },
                  [bpBtnFlexSM]: {
                    alignSelf: 'stretch',
                    width: '100%',
                  },
                })}
                key={c}
                onClick={() => handleCategoryClick(c)}>
                {c}
              </button>
            )
          })}
        </span>
      </div>
      <Grid posts={posts} currentCategory={currentCategory} />
    </div>
  )
}

function Grid({ posts, currentCategory }) {
  return (
    <div
      css={css({
        display: 'grid',
        gridGap: '25px',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr) )',
        a: {
          color: 'inherit',
        },
      })}>
      {posts.map(p => {
        return (
          <GridItem
            key={p.node.id}
            data={p.node}
            currentCategory={currentCategory}
          />
        )
      })}
    </div>
  )
}

function GridItem({ data, currentCategory }) {
  const itemCategory = get(data, 'frontmatter.category')
  const displayItem =
    currentCategory === ALL_CATEGORY ? true : itemCategory === currentCategory
  if (isEmpty(data) || !displayItem) {
    return null
  }
  return (
    <Link
      to={`/${data.frontmatter.slug}`}
      key={data.id}
      css={
        data.frontmatter.featured &&
        css({
          [bpMinSM]: {
            gridColumnStart: '1',
            gridColumnEnd: '3',
          },
        })
      }>
      <Card
        title={data.frontmatter.title}
        image={data.frontmatter.thumbnail.childImageSharp.fluid}
        featured={data.frontmatter.featured}
        description={data.frontmatter.description}
        date={data.frontmatter.date}
        category={data.frontmatter.category}
      />
    </Link>
  )
}

export default MainCardGrid
