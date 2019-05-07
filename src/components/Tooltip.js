import React from 'react'
import './Tooltip.css'

class Tooltip extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      displayTooltip: false,
    }
    this.hideTooltip = this.hideTooltip.bind(this)
    this.showTooltip = this.showTooltip.bind(this)
  }

  hideTooltip() {
    this.setState({ displayTooltip: false })
  }
  showTooltip() {
    this.setState({ displayTooltip: true })
  }

  render() {
    let message = this.props.message
    return (
      <span className='tooltip' onMouseLeave={this.hideTooltip}>
        {this.state.displayTooltip && (
          <span className={`tooltip-bubble tooltip-top`}>
            <div className='tooltip-message'>{message}</div>
          </span>
        )}
        <span className='tooltip-trigger' onMouseOver={this.showTooltip}>
          {this.props.children}
        </span>
      </span>
    )
  }
}

export default Tooltip
