// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {

    constructor() {
        super()
        this.state = {timesClicked: 0}
    }

    clickTime = () => {
        this.setState(current => ({
            timesClicked: current.timesClicked + 1
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.clickTime}>{this.state.timesClicked}</button>
            </div>
        )
    }
}
