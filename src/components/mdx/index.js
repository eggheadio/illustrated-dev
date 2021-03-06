import React from 'react'
import Title from './Title'
import Paragraph from './Paragraph'
import Blockquote from './Blockquote'
import Code from './Code'
import BlogImage from './BlogImage'
import ImageFrame from './ImageFrame'
import ImageGrid from './ImageGrid'
import Divider from './Divider'
import { H2, H3, H4, H5, H6 } from './Subheaders'
import { preToCodeBlock } from 'mdx-utils'
import Center from './Center'
import Tooltip from './Tooltip'
import TwoCol from './TwoCol'
import Link from '../link'
import NotesContainer from './NotesContainer'
import FullNote from './FullNote'
import SmallCenter from './SmallCenter'
import ReadNext from './ReadNext'

export default {
  h1: props => <Title {...props} />,
  h2: props => <H2 {...props} />,
  h3: props => <H3 {...props} />,
  h4: props => <H4 {...props} />,
  h5: props => <H5 {...props} />,
  h6: props => <H6 {...props} />,
  p: props => <Paragraph {...props} />,
  blockquote: props => <Blockquote {...props} />,
  img: props => <BlogImage {...props} />,
  ImageGrid: props => <ImageGrid {...props} />,
  ImageFrame: props => <ImageFrame {...props} />,
  hr: props => <Divider {...props} />,
  Center: props => <Center {...props} />,
  Tooltip: props => <Tooltip {...props} />,
  Link: props => <Link {...props} />,
  TwoCol: props => <TwoCol {...props} />,
  SmallCenter: props => <SmallCenter {...props} />,
  NotesContainer: props => <NotesContainer {...props} />,
  ReadNext: props => <ReadNext {...props} />,
  FullNote: props => <FullNote {...props} />,
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
