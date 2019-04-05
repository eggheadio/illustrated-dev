import React from 'react'
import PropTypes from 'prop-types'
import twitterIcon from '../images/twitter.svg'
import pinterestIcon from '../images/pinterest.svg'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
  PinterestShareButton,
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
      via={socialConfig.twitterHandle.split('@').join('')}
      hashtags={tags}>
      <img src={twitterIcon} width="100%" alt="Twitter" />
    </TwitterShareButton>
    {socialConfig.config.media && (
      <PinterestShareButton
        css={ShareButton}
        media={socialConfig.config.media}
        url={socialConfig.config.url}
        title={socialConfig.config.title}>
        <img src={pinterestIcon} width="100%" alt="Twitter" />
      </PinterestShareButton>
    )}
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
