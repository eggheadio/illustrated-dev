import React from 'react'
import Title from './Title'
import Subtitle from './Subtitle'
import Paragraph from './Paragraph'
import Blockquote from './Blockquote'
import Code from './Code'
import Image from './Image'
import Divider from './Divider'
import { preToCodeBlock } from 'mdx-utils'

export default {
  h1: props => <Title {...props} />,
  h2: props => <Subtitle {...props} />,
  p: props => <Paragraph {...props} />,
  blockquote: props => <Blockquote {...props} />,
  img: props => <Image {...props} />,
  hr: props => <Divider {...props} />,
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />
    }
  },
}
