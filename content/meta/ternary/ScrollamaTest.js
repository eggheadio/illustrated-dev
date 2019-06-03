import React, { Component } from 'react'
import { Scrollama, Step } from 'react-scrollama'
import ConditionCode from './ConditionCode.js'

// // Setup variables

// const sec1 = document.queryselctor('#cc1')
// const sec2 = document.queryselctor('#cc2')
// const sec3 = document.queryselctor('#cc3')

const visible = {
  opacity: '1',
  transition: 'all 0.5s ease-in-out',
}

const invisible = {
  opacity: '0',
  transition: 'all 0.5s ease-in-out',
}

// React Component

class ScrollGraphic extends Component {
  constructor(props) {
    super(props)
  }

  onStepEnter = ({ element, data, direction }) => {
    console.log(element, data, direction)
    // element.style.opacity = '100%'
  }

  onStepExit = ({ element, data, direction }) => {
    console.log(element, data, direction)
    // element.style.opacity = '0%'
  }

  render() {
    return (
      <Scrollama
        onStepEnter={this.onStepEnter}
        onStepExit={this.onStepExit}
        debug>
        <Step>
          <ConditionCode />
        </Step>
      </Scrollama>
    )
  }
}

export default ScrollGraphic

// Referenced examples of working Scrollama component

// <div
//         style={{
//           padding: '20vh 2vw',
//           display: 'flex',
//           fontFamily: 'Helvetica',
//           justifyContent: 'space-between',
//         }}>
//         <div style={{ flexBasis: '35%' }}>
//           <Scrollama
//             onStepEnter={this.onStepEnter}
//             onStepExit={this.onStepExit}
//             offset={0.33}>
//             <Step>
//               <div
//                 style={{
//                   paddingTop: 200,
//                   paddingBottom: 200,
//                   border: '1px solid #333',
//                   marginBottom: 200,
//                   opacity: '0%',
//                 }}>
//                 <p>step value: {data + 1}</p>
//               </div>
//             </Step>
//             <Step>
//               <div
//                 style={{
//                   paddingTop: 200,
//                   paddingBottom: 200,
//                   border: '1px solid #333',
//                   marginBottom: 200,
//                   opacity: '0%',
//                 }}>
//                 <p>step value: {data}</p>
//               </div>
//             </Step>
//           </Scrollama>
//         </div>
//         <div
//           style={{
//             flexBasis: '60%',
//             position: 'sticky',
//             width: '100%',
//             padding: '5rem 0',
//             top: '160px',
//             alignSelf: 'flex-start',
//             backgroundColor: '#aaa',
//           }}>
//           <p>{data}</p>
//         </div>
//       </div>
