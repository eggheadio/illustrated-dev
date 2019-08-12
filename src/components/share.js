import React from 'react'
import PropTypes from 'prop-types'
import twitterIcon from '../images/twitter.svg'
// import pinterestIcon from '../images/pinterest.svg'
import emailIcon from '../images/emailicon.svg'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import {
  TwitterShareButton,
  RedditShareButton,
  // PinterestShareButton,
  EmailShareButton,
} from 'react-share'

const ShareButton = css({
  width: '40px',
  height: '40px',
  cursor: 'pointer',
  margin: '0 5px',
})

const Share = ({ socialConfig, tags }) => (
  <div
    css={css({
      width: '100%',
      marginTop: '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      img: {
        margin: 0,
      },
    })}>
    <TwitterShareButton
      css={ShareButton}
      url={socialConfig.config.url}
      title={socialConfig.config.title}
      via={socialConfig.twitterHandle.split('@').join('')}>
      <img src={twitterIcon} width='100%' alt='Twitter' />
    </TwitterShareButton>
    {/* {socialConfig.config.media && (
      <PinterestShareButton
        css={ShareButton}
        media={socialConfig.config.media}
        url={socialConfig.config.url}
        title={socialConfig.config.title}>
        <img src={pinterestIcon} width="100%" alt="Pinterest" />
      </PinterestShareButton>
    )} */}
    <EmailShareButton
      css={ShareButton}
      url={socialConfig.config.url}
      title={socialConfig.config.title}
      subject={socialConfig.config.title}
      body={`Check out ${socialConfig.config.url}`}>
      <img src={emailIcon} width='100%' alt='email' />
    </EmailShareButton>
  </div>
)

Share.propTypes = {
  socialConfig: PropTypes.shape({
    twitterHandle: PropTypes.string.isRequired,
    config: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      media: PropTypes.string.isRequired,
    }),
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
}
Share.defaultProps = {
  tags: [],
}

export default Share
