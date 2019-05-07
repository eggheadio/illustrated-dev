import React, { PureComponent } from 'react'
import { Scrollama, Step } from 'react-scrollama'
import { css } from '@emotion/core'

class GraphicThing extends PureComponent {
  state = {
    data: 0,
    steps: [10, 20, 30],
  }

  onStepEnter = ({ element, data }) => {
    console.log(element)
    element.style.opacity = '0.5'
  }

  onStepExit = ({ element, data }) => {
    console.log(element)
    element.style.opacity = '1'
  }

  render() {
    const { data, steps } = this.state

    return (
      <div>
        <Scrollama
          onStepEnter={this.onStepEnter}
          onStepExit={this.onStepExit}
          offset={0.3}>
          {steps.map(value => (
            <Step data={value} key={value}>
              <div
                css={css({
                  margin: '0 auto 2rem auto',
                  paddingTop: 200,
                  paddingBottom: 200,
                  border: '1px solid #333',
                })}>
                <p>step value: {value}</p>
              </div>
            </Step>
          ))}
        </Scrollama>
      </div>
    )
  }
}

export default GraphicThing
