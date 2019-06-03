import React from 'react'
import { css } from '@emotion/core'
import downloadicon from '../../../src/images/downloadicon.svg'

//  Inline downloads component for MDX posts

// To make the <DownloadSection /> component work, you have to put the image as an inline MDX component. Renders through {props.children}.
// Leaving empty lines between the component tags and the inline image is also necessary

const StyledDiv = css({
  display: 'grid',
  gridTemplateColumns: '65% 35%',
  gridGap: '3em',
  textAlign: 'left',
  marginTop: '10vh',
})

const StyledSubhead = css({
  fontSize: '22px',
  fontWeight: '600',
})

const StyledHR = css({
  alignContent: 'left',
  margin: '0',
  width: '80px',
  border: '1px solid #3FCCDB',
})

const StyledImg = css({
  border: '1px solid #e8f3f7',
  boxSizing: 'border-box',
  borderRadius: '4px',
  boxShadow: '0px 8px 16px -12px rgba(120, 134, 138, 0.75)',
})

const hoverEffect = css({
  transform: 'translateY(3px)',
  color: '#3FCCDB',
})

const hoverDownload = css({
  cursor: 'pointer',
  display: 'inline-flex',
  transition: 'all 0.4s ease-in-out',
  alignItems: 'center',
  marginTop: '16px',
  ':hover, :focus': hoverEffect,
})

const DownloadSection = props => {
  return (
    <div css={StyledDiv}>
      <div css={StyledImg}>{props.children}</div>
      <div>
        <h1 style={{ fontSize: '2.4em' }}>{props.header}</h1>
        <div css={StyledHR} />
        <h3 css={StyledSubhead}>{props.subheader}</h3>
        <a href={props.filepath} download={props.filename}>
          <div css={hoverDownload}>
            <img src={downloadicon} />
            <h5
              style={{
                marginLeft: '14px',
                marginTop: '6px',
              }}>
              Download
            </h5>
          </div>
        </a>
      </div>
    </div>
  )
}

export default DownloadSection
