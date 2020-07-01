import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const FAQDiagram = () => {
  const data = useStaticQuery(graphql`
    query FAQDiagramQuery {
      faqDiagram: file(relativePath: { eq: "illustratednotes-diagram.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            src
          }
        }
      }
    }
  `)


  return (
    <Img
      title='illustratednotes'
      alt='A line diagram showing sketchnotes on one end, and illustration on the other. Illustrated notes are in the middle.'
      src={data.faqDiagram.childImageSharp.fluid}
    />
  )
}

export default FAQDiagram
