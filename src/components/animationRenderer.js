import React from 'react'
import Lottie from 'react-lottie'

export default function AnimationRenderer(props) {
  const [isPaused, setPaused] = React.useState(false)
  const defaultOptions = {
    loop: props.loop || true,
    autoplay: props.autoplay || true,
    animationData: props.animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return props.animation ? (
    <>
      <Lottie
        options={defaultOptions}
        width={props.width || '100%'}
        height={props.height || '100%'}
        isClickToPauseDisabled={true}
        isPaused={isPaused}
      />
    </>
  ) : (
    'No animation data provided.'
  )
}

// To use, export your lottie animation to a JSON file. In your post, add:
// import AnimationRenderer from '../components/animationRenderer'
//  import CoolIntroAnimation from './coolIntroAnimation.json'
