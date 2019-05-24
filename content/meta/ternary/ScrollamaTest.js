import React, { Component } from 'react'
import { Scrollama, Step } from 'react-scrollama'

class ScrollGraphic extends Component {
  state = {
    data: 1,
    steps: [10, 20, 30, 40],
  }

  onStepEnter = ({ element, data }) => {
    console.log('entered')
    element.style.opacity = '100%'
  }

  onStepExit = ({ element, data }) => {
    console.log('exited')
    element.style.opacity = '0%'
  }

  render() {
    const { data, steps } = this.state

    return (
      <div
        style={{
          padding: '20vh 2vw',
          display: 'flex',
          fontFamily: 'Helvetica',
          justifyContent: 'space-between',
        }}>
        <div style={{ flexBasis: '35%' }}>
          <Scrollama
            onStepEnter={this.onStepEnter}
            onStepExit={this.onStepExit}
            offset={0.33}>
            <Step>
              <div
                style={{
                  paddingTop: 200,
                  paddingBottom: 200,
                  border: '1px solid #333',
                  marginBottom: 200,
                  opacity: '0%',
                }}>
                <p>step value: {data + 1}</p>
              </div>
            </Step>
            <Step>
              <div
                style={{
                  paddingTop: 200,
                  paddingBottom: 200,
                  border: '1px solid #333',
                  marginBottom: 200,
                  opacity: '0%',
                }}>
                <p>step value: {data}</p>
              </div>
            </Step>
          </Scrollama>
        </div>
        <div
          style={{
            flexBasis: '60%',
            position: 'sticky',
            width: '100%',
            padding: '5rem 0',
            top: '160px',
            alignSelf: 'flex-start',
            backgroundColor: '#aaa',
          }}>
          <p>{data}</p>
        </div>
      </div>
    )
  }
}

export default ScrollGraphic
