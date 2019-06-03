// import React from 'react'
// import { useInView } from 'react-intersection-observer'
// import ConditionCode from './ConditionCode.js'
// // import { css, keyframes } from '@emotion/core'

// // Scrollytelling component implemented with react-intersection-observer
// // https://github.com/thebuilder/react-intersection-observer

// // The useInView hook accepts root, rootMargin, and threshold.

// const TernaryScroll = () => {
//   const [ref, inView] = useInView({
//     /* Optional options */
//     threshold: 0.5,
//     rootMargin: '-150px 0px -150px 0px',
//   })

//   console.log(inView)

//   return (

//     <div ref={ref}>

//     </div>

//     <div ref={ref}>
//       {/* Use the ternary operator to conditionally render elements in view or out */}
//       {inView ? (
//         <ConditionCode visibility1={visible} />
//       ) : (
//         <ConditionCode visibility1={invisible} />
//       )}
//     </div>
//   )
// }

// export default TernaryScroll
