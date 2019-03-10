import React from 'react'

const Transcript = function (props) {
    return (
        <p>{props.transcript}</p>
    )
}

class Toggle extends React.Component {
    constructor() {
        super()
        this.state = {
            isHidden: true
        }
    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleHidden.bind(this)} >
                    Show Transcript
                </button>
                {!this.state.isHidden && <Transcript transcript="Hello" />}
            </div>
        )
    }
}

export default Toggle